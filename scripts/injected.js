// You CANNOT use `browser`/`chrome` here and you CANNOT interact with extension stuff like storage and tabs.

const XHR = XMLHttpRequest.prototype;

const open = XHR.open;
const send = XHR.send;
const setRequestHeader = XHR.setRequestHeader;

XHR.open = function () {
  this._requestHeaders = {};

  return open.apply(this, arguments);
};

XHR.setRequestHeader = function (header, value) {
  this._requestHeaders[header] = value;
  return setRequestHeader.apply(this, arguments);
};

// override fetch
const { fetch: originalFetch } = window;
window.fetch = async (...args) => {
  const [resource, config] = args;

  // request interceptor ends
  const response = await originalFetch(resource, config).then(async (res) => {
    // const body = res.body;
    // console.log(body.toString("utf8"));
    const x = res.clone();
    await x
      .json()
      .then((data) => {
        console.log(data);
      })
      .catch(console.error);

    return res;
  });

  // response interceptor here
  return response;
};

XHR.send = function () {
  this.addEventListener("load", function () {
    (function (ns, fetch) {
      if (typeof fetch !== "function") return;

      ns.fetch = function (url) {
        const out = fetch.apply(this, arguments);

        return out;
      };
    })(window, window.fetch);
  });

  return send.apply(this, arguments);
};
