"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const newsServices_1 = require("../service/newsServices");
const HttpStatus = require("http-status");
const helpers_1 = require("../helpers/helpers");
const redis = require("redis");
class NewsResource {
    get(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = redis.createClient();
            client.get('news', function (error, response) {
                if (response) {
                    console.log("redis");
                    helpers_1.default.sendResponse(response, HttpStatus.OK, JSON.parse(response));
                }
                else {
                    newsServices_1.default.get().
                        then(news => {
                        console.log("db");
                        client.set('news', JSON.stringify(news));
                        client.expire('news', 2);
                        helpers_1.default.sendResponse(response, HttpStatus.OK, news);
                    }).catch(error => console.error.bind(console, `Error ${error}`));
                }
            });
        });
    }
    getById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = request.params.id;
            newsServices_1.default.getById(_id).then(news => helpers_1.default.sendResponse(response, HttpStatus.OK, news))
                .catch(error => console.error.bind(console, `Error ${error}`));
        });
    }
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            let news = request.body;
            newsServices_1.default.create(news)
                .then(news => helpers_1.default.sendResponse(response, HttpStatus.CREATED, "Noticia cadastrada com sucesso!"))
                .catch(error => console.error.bind(console, `Error ${error}`));
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = request.params.id;
            let news = request.body;
            newsServices_1.default.update(_id, news)
                .then(news => helpers_1.default.sendResponse(response, HttpStatus.CREATED, "foi atualizada com sucesso."))
                .catch(error => console.error.bind(console, `Error ${error}`));
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = request.params.id;
            newsServices_1.default.delete(_id)
                .then(() => helpers_1.default.sendResponse(request, HttpStatus.OK, `Noticia atualizada com sucesso!`))
                .catch(error => console.error.bind(console, `Error ${error}`));
        });
    }
}
exports.default = new NewsResource();
