import NewsService from '../service/newsServices';
import * as HttpStatus from "http-status";
import Helper from '../helpers/helpers';

class NewsResource {

    get(request, response) {
        NewsService.get()
            .then(news => Helper.sendResponse(response, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    getById(request, response) {
        const _id = request.params.id;
        NewsService.getById(_id).then(news => Helper.sendResponse(response, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    create(request, response) {
        let news = request.body;

        NewsService.create(news)
            .then(news => Helper.sendResponse(response, HttpStatus.CREATED, "Noticia cadastrada com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));

    }

    update(request, response) {
        const _id = request.params.id;
        let news = request.body;

        NewsService.update(_id, news)
            .then(news => Helper.sendResponse(response, HttpStatus.CREATED, "foi atualizada com sucesso."))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    delete(request, response) {
        const _id = request.params.id;

        NewsService.delete(_id)
            .then(
                () => Helper.sendResponse(request, HttpStatus.OK, `Noticia atualizada com sucesso!`),
        )
        .catch (error => console.error.bind(console, `Error ${error}`));
    }

}

export default new NewsResource();