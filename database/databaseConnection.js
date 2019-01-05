"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Database = /** @class */ (function () {
    function Database() {
        this.URL = 'mongodb://link-db:17017/newsDatabase';
    }
    Database.prototype.createConnection = function () {
        mongoose.connect(this.URL);
    };
    return Database;
}());
exports["default"] = Database;
