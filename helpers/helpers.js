"use strict";
exports.__esModule = true;
var Helper = /** @class */ (function () {
    function Helper() {
        //Metodo para que possamos passar por todas nossas rotas
        this.sendResponse = function (response, statusCode, data) {
            response.status(statusCode).json({ result: data });
        };
    }
    return Helper;
}());
exports["default"] = new Helper();
