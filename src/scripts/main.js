var unique = require("uniq");
var App = require("./module-application");

// -----------------------------------------------------------------------

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
console.log(unique(data));

const $target = document.querySelector("#app");

window.addEventListener("load", function () {
  const url = URL.parse(window.location.href);
  const {
    hash,
    host,
    hostname,
    href,
    origin,
    password,
    pathname,
    port,
    protocol,
    search,
    searchParams,
    username,
  } = url || new URL("");
  const urlJSON = {
    hash,
    host,
    hostname,
    href,
    origin,
    password,
    pathname,
    port,
    protocol,
    search,
    searchParams,
    username,
  };

  $target.innerHTML = "<pre>" + JSON.stringify(urlJSON, null, 2);
  return new App();
});
