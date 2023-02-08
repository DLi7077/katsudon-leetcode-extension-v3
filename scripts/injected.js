// Original inspiration: override browser's XHR function.
// Source: https://stackoverflow.com/a/67390377

// Since the submission details are in fetch requests, intercept fetches instead.

// Global variables:
let solutionCode; // updates on submission create
let problemDetails; // updates on page load

const Utils = {
  toMegabytes: (bytes) => {
    const MB = 1000000;
    return bytes / MB;
  },
  get: (obj, key) => {
    const isObject = typeof obj === "object";
    if (!isObject) return null;
    const subpaths = key.split(".");
    let currentLevel = obj;

    for (const pathkey of subpaths) {
      if (!currentLevel[pathkey]) return null;

      currentLevel = currentLevel[pathkey];
    }

    return currentLevel;
  },
};

const Checks = {
  isCreateSolutionRequest: (fetchUrl) => {
    // create submssion  /problems/*/submit/
    // create testcase   /problems/*/interpret_solution/
    const endsWith_submit_ = new RegExp("submit/$");

    return endsWith_submit_.test(fetchUrl);
  },
  isCheckSolutionRequest: (fetchUrl) => {
    const endsWith_check_ = new RegExp("check/$");
    const contains_runcode_ = new RegExp("runcode");

    return endsWith_check_.test(fetchUrl) && !contains_runcode_.test(fetchUrl);
  },
  isGraphQLUrl: (XHRUrl) => {
    return XHRUrl.includes("graphql");
  },
  hasQuestionData: (data) => {
    return !!Utils.get(data, "data.question.content");
  },
};

// Parse the response and create a document for katsudon
// Solution for Katsudon server is in the form of solution attributes
/*
  problem_id: number;
  solution_language: string;
  solution_code: string;
  failed?: boolean;
  error?: string;
  runtime_ms?: number;
  memory_usage_mb?: number;
*/
async function parseLeetcodeFetchResponse(response) {
  const isResolved = response.state === "SUCCESS";

  if (!isResolved) return;

  const problemId = parseInt(response.question_id);
  const solutionPassed = response.run_success;
  const solutionLanguage = response.pretty_lang;
  const solutionError = solutionPassed ? response.status_msg : null;
  const runtimeMS = solutionPassed
    ? parseInt(response.status_runtime.split(" ")[0])
    : null;
  const memoryMB = solutionPassed ? Utils.toMegabytes(response.memory) : null;

  const resolvedSubmission = {
    problem_id: problemId,
    solution_language: solutionLanguage,
    solution_code: solutionCode,
    failed: !solutionPassed,
    error: solutionError,
    runtime_ms: runtimeMS,
    memory_usage_mb: memoryMB,
  };

  const devin_user_id = "6306b34920cf5f80f7d0c20d";

  const createSolutionRequest = {
    user_id: devin_user_id,
    ...resolvedSubmission,
    ...problemDetails,
  };

  const createRoute =
    "https://katsudon-server-v2.herokuapp.com/api/solution/create";

  const createdSolution = await fetch(createRoute, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(createSolutionRequest), // body data type must match "Content-Type" header
  }).then((res) => res.json());

  console.log(createdSolution);
}

function scrapeProblemDetails(data) {
  const result = {
    problem_url: `https://leetcode.com/problems/${Utils.get(
      data,
      "titleSlug"
    )}/`,
    problem_title: Utils.get(data, "title"),
    problem_id: Utils.get(data, "questionFrontendId"),
    problem_description: Utils.get(data, "content"),
    problem_difficulty: Utils.get(data, "difficulty"),
    problem_tags: Utils.get(data, "topicTags").reduce((allTags, currTag) => {
      return [...allTags, Utils.get(currTag, "name")];
    }, []),
  };

  console.log(result);

  return result;
}

async function handleGraphQLFetch(responseURL, response) {
  if (Checks.isGraphQLUrl(responseURL)) {
    // response should be a Blob
    // https://developer.mozilla.org/en-US/docs/Web/API/Blob/text
    const responseJSON = await response.text().then((text) => JSON.parse(text));

    if (Checks.hasQuestionData(responseJSON)) {
      const fetchQuestion = Utils.get(responseJSON, "data.question");
      problemDetails = scrapeProblemDetails(fetchQuestion);
    }
  }
}

// description Intercepts the fetch request response, and returns the original response
async function handleInterceptResponse(response) {
  await response
    .clone()
    .json()
    .then(parseLeetcodeFetchResponse)
    .catch(console.error);

  // return the original response
  return response;
}

function handleInterceptError(error) {
  console.error(error);
}

// Override fetch to intercept submission details
// Source: https://blog.logrocket.com/intercepting-javascript-fetch-api-requests-responses/
const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
  const [fetchUrl, payload] = args;

  if (Checks.isCreateSolutionRequest(fetchUrl)) {
    solutionCode = JSON.parse(payload.body).typed_code;
  }

  // non-submission request - use orginal fetch
  if (!Checks.isCheckSolutionRequest(fetchUrl)) {
    return originalFetch(fetchUrl, payload);
  }

  const interceptedResponse = await originalFetch(fetchUrl, payload)
    .then(handleInterceptResponse)
    .catch(handleInterceptError);

  return interceptedResponse;
};

// Override XHR to intercept problem details
// Source: https://stackoverflow.com/a/67390377
const XHR = XMLHttpRequest.prototype;

// idk whats going on here
const { open, send, setRequestHeader } = XHR;
XHR.open = function () {
  this._requestHeaders = {};

  return open.apply(this, arguments);
};
XHR.setRequestHeader = function (header, value) {
  this._requestHeaders[header] = value;
  return setRequestHeader.apply(this, arguments);
};

XHR.send = function () {
  this.addEventListener("load", async function () {
    const { responseURL, response } = this;
    // one of the graphQL requests contain the problem description
    await handleGraphQLFetch(responseURL, response);
  });

  return send.apply(this, arguments);
};
