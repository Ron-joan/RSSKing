"use strict";
exports.__esModule = true;
exports.getRSS = void 0;
var RSSHub = require('rsshub');
RSSHub.init({
// config
});
var getRSS = function (resource) {
    RSSHub.request(resource.resourcePath)
        .then(function (data) {
        console.log(data.item[0]);
    })["catch"](function (e) {
        console.log(e);
    });
};
exports.getRSS = getRSS;
