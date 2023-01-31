// Original inspiration: override browser's XHR function
// Source : https://stackoverflow.com/a/67390377

// Since the submission details are in fetch requests, intercept fetches instead.

// parse the response and create a document for katsudon
async function parseLeetcodeFetchResponse(response) {
  console.log(response);
}

// description Intercepts the fetch request response, and returns the original response
async function handleInterceptResponse(response) {
  await response
    .clone()
    .json()
    .then(parseLeetcodeFetchResponse)
    .catch(console.error);

  return response;
}

function handleInterceptError(error) {
  console.log(error);
}

// override fetch
// source : https://blog.logrocket.com/intercepting-javascript-fetch-api-requests-responses/
const { fetch: originalFetch } = window;
window.fetch = async (...args) => {
  const [resource, config] = args;

  const interceptedResponse = await originalFetch(resource, config)
    .then(handleInterceptResponse)
    .catch(handleInterceptError);

  return interceptedResponse;
};
