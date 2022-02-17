"use strict";
exports.__esModule = true;
var SnowFlake_1 = require("../utility/SnowFlake");
var ResourceService_1 = require("../service/ResourceService");
console.log((0, SnowFlake_1.getOneSnowFlake)(2));
(0, ResourceService_1.createResource)({
    resourceID: (0, SnowFlake_1.getOneSnowFlake)(2),
    resourceType: 1,
    resourcePath: "/ui-cn/article"
})();
