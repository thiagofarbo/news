"use strict";
exports.__esModule = true;
var startUp_1 = require("./startUp");
var port = process.env.PORT || "3050";
startUp_1["default"].app.listen(port, function () {
    console.log("Server is running on port: " + port);
});
