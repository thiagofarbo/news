"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const configs_1 = require("./configs");
class Auth {
    validade(request, response, next) {
        var token = request.headers['x-access-token'];
        if (token) {
            jwt.verify(token, configs_1.default.secret, function (error, decoded) {
                if (error) {
                    return response.status(403).send({
                        success: false,
                        message: '403 - Invalid Token'
                    });
                }
                else {
                    next();
                }
            });
        }
        else {
            return response.status(401).send({
                success: false,
                message: '401 - Unauthorized'
            });
        }
    }
}
exports.default = new Auth();
