"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newsServices_1 = require("../service/newsServices");
const HttpStatus = require("http-status");
const helpers_1 = require("../helpers/helpers");
class NewsResource {
    get(request, response) {
        newsServices_1.default.get()
            .then(news => helpers_1.default.sendResponse(response, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(request, response) {
        const _id = request.params.id;
        newsServices_1.default.getById(_id).then(news => helpers_1.default.sendResponse(response, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(request, response) {
        let news = request.body;
        newsServices_1.default.create(news)
            .then(news => helpers_1.default.sendResponse(response, HttpStatus.CREATED, "Noticia cadastrada com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(request, response) {
        const _id = request.params.id;
        let news = request.body;
        newsServices_1.default.update(_id, news)
            .then(news => helpers_1.default.sendResponse(response, HttpStatus.CREATED, "foi atualizada com sucesso."))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(request, response) {
        const _id = request.params.id;
        newsServices_1.default.delete(_id)
            .then(() => helpers_1.default.sendResponse(request, HttpStatus.OK, `Noticia atualizada com sucesso!`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new NewsResource();
