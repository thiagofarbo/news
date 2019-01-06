"use strict";
exports.__esModule = true;
var newsServices_1 = require("../service/newsServices");
var HttpStatus = require("http-status");
var helpers_1 = require("../helpers/helpers");
var NewsResource = /** @class */ (function () {
    function NewsResource() {
    }
    NewsResource.prototype.get = function (request, response) {
        newsServices_1["default"].get()
            .then(function (news) { return helpers_1["default"].sendResponse(response, HttpStatus.OK, news); })["catch"](function (error) { return console.error.bind(console, "Error " + error); });
    };
    NewsResource.prototype.getById = function (request, response) {
        var _id = request.params.id;
        newsServices_1["default"].getById(_id).then(function (news) { return helpers_1["default"].sendResponse(response, HttpStatus.OK, news); })["catch"](function (error) { return console.error.bind(console, "Error " + error); });
    };
    NewsResource.prototype.create = function (request, response) {
        var news = request.body;
        newsServices_1["default"].create(news)
            .then(function (news) { return helpers_1["default"].sendResponse(response, HttpStatus.CREATED, "Noticia cadastrada com sucesso!"); })["catch"](function (error) { return console.error.bind(console, "Error " + error); });
    };
    NewsResource.prototype.update = function (request, response) {
        var _id = request.params.id;
        var news = request.body;
        newsServices_1["default"].update(_id, news)
            .then(function (news) { return helpers_1["default"].sendResponse(response, HttpStatus.CREATED, "foi atualizada com sucesso."); })["catch"](function (error) { return console.error.bind(console, "Error " + error); });
    };
    NewsResource.prototype["delete"] = function (request, response) {
        var _id = request.params.id;
        newsServices_1["default"]["delete"](_id)
            .then(function () { return helpers_1["default"].sendResponse(request, HttpStatus.OK, "Noticia atualizada com sucesso!"); })["catch"](function (error) { return console.error.bind(console, "Error " + error); });
    };
    return NewsResource;
}());
exports["default"] = new NewsResource();
