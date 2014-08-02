/*global window, document */

var unique = require('uniq');
var url = require('url');

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));

window.addEventListener('load', function () {
    document.body.innerHTML = '<pre>' + JSON.stringify(url.parse(window.location.href));
});
