// Original inspiration: override browser's XHR function.
// Source: https://stackoverflow.com/a/67390377

// Since the submission details are in fetch requests, intercept fetches instead.

// Global variable - only one solution per page, updates on submission create.
let solutionCode;

const Utils = {
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
  toMegabytes: (bytes) => {
    const MB = 1000000;
    return bytes / MB;
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

  console.log(resolvedSubmission);
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

// override fetch
// source : https://blog.logrocket.com/intercepting-javascript-fetch-api-requests-responses/
const { fetch: originalFetch } = window;

window.fetch = async (...args) => {
  const [fetchUrl, payload] = args;

  if (Utils.isCreateSolutionRequest(fetchUrl)) {
    solutionCode = JSON.parse(payload.body).typed_code;
  }

  // non-submission request - use orginal fetch
  if (!Utils.isCheckSolutionRequest(fetchUrl)) {
    return originalFetch(fetchUrl, payload);
  }

  const interceptedResponse = await originalFetch(fetchUrl, payload)
    .then(handleInterceptResponse)
    .catch(handleInterceptError);

  return interceptedResponse;
};
