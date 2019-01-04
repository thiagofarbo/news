"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const databaseConnection_1 = require("./database/databaseConnection");
const newsResource_1 = require("./resource/newsResource");
class StartUp {
    constructor() {
        this.app = express();
        this._database = new databaseConnection_1.default();
        this._database.createConnection();
        this.middler();
        this.routes();
    }
    middler() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        this.app.route('/').get((request, response) => {
            response.send({ versao: '0.0.1' });
        });
        this.app.route("/api/v1/news").get(newsResource_1.default.get);
        this.app.route("/api/v1/news/:id").get(newsResource_1.default.getById);
        this.app.route("/api/v1/news").post(newsResource_1.default.create);
        this.app.route("/api/v1/news/:id").put(newsResource_1.default.update);
        this.app.route("/api/v1/news/:id").delete(newsResource_1.default.delete);
    }
}
exports.default = new StartUp();
