"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helper {
    constructor() {
        //Metodo para que possamos passar por todas nossas rotas
        this.sendResponse = function (response, statusCode, data) {
            response.status(statusCode).json({ result: data });
        };
    }
}
exports.default = new Helper();
