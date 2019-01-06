"use strict";
exports.__esModule = true;
var newsRepository_1 = require("../repository/newsRepository");
var NewsService = /** @class */ (function () {
    function NewsService() {
    }
    NewsService.prototype.get = function () {
        return newsRepository_1["default"].find({});
    };
    NewsService.prototype.getById = function (_id) {
        return newsRepository_1["default"].findById({ _id: _id });
    };
    NewsService.prototype.create = function (news) {
        return newsRepository_1["default"].create(news);
    };
    NewsService.prototype.update = function (_id, news) {
        return newsRepository_1["default"].findByIdAndUpdate(_id, news);
    };
    NewsService.prototype["delete"] = function (_id) {
        return newsRepository_1["default"].findByIdAndDelete(_id);
    };
    return NewsService;
}());
exports["default"] = new NewsService();
