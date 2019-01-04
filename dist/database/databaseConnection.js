"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Database {
    constructor() {
        this.URL = 'mongodb://localhost:17017/newsDatabase';
    }
    createConnection() {
        mongoose.connect(this.URL);
    }
}
exports.default = Database;
