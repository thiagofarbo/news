"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var databaseConnection_1 = require("./database/databaseConnection");
var newsResource_1 = require("./resource/newsResource");
var StartUp = /** @class */ (function () {
    function StartUp() {
        this.app = express();
        this._database = new databaseConnection_1["default"]();
        this._database.createConnection();
        this.middler();
        this.routes();
    }
    StartUp.prototype.middler = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    StartUp.prototype.routes = function () {
        this.app.route('/').get(function (request, response) {
            response.send({ versao: '0.0.1' });
        });
        this.app.route("/api/v1/news").get(newsResource_1["default"].get);
        this.app.route("/api/v1/news/:id").get(newsResource_1["default"].getById);
        this.app.route("/api/v1/news").post(newsResource_1["default"].create);
        this.app.route("/api/v1/news/:id").put(newsResource_1["default"].update);
        this.app.route("/api/v1/news/:id")["delete"](newsResource_1["default"]["delete"]);
    };
    return StartUp;
}());
exports["default"] = new StartUp();
