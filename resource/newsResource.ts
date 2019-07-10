import NewsService from '../service/newsServices';
import * as HttpStatus from "http-status";
import Helper from '../helpers/helpers';
import * as redis from 'redis'; 

class NewsResource {

    async get(request, response) {

        let client = redis.createClient();

        client.get('news', function(error, response){

            if(response){
                console.log("redis");
                Helper.sendResponse(response, HttpStatus.OK, JSON.parse(response));

            }else{
                NewsService.get().
                then(news => {
                    console.log("db");
                    client.set('news', JSON.stringify(news));
                    client.expire('news', 2);

                    Helper.sendResponse(response, HttpStatus.OK, news);
                
                }).catch(error => console.error.bind(console, `Error ${error}`));
            }
        });
    }

    async getById(request, response) {
        const _id = request.params.id;
        NewsService.getById(_id).then(news => Helper.sendResponse(response, HttpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    async create(request, response) {
        let news = request.body;

        NewsService.create(news)
            .then(news => Helper.sendResponse(response, HttpStatus.CREATED, "Noticia cadastrada com sucesso!"))
            .catch(error => console.error.bind(console, `Error ${error}`));

    }

    async update(request, response) {
        const _id = request.params.id;
        let news = request.body;

        NewsService.update(_id, news)
            .then(news => Helper.sendResponse(response, HttpStatus.CREATED, "foi atualizada com sucesso."))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    async delete(request, response) {
        const _id = request.params.id;

        NewsService.delete(_id)
            .then(
                () => Helper.sendResponse(request, HttpStatus.OK, `Noticia atualizada com sucesso!`),
        )
        .catch (error => console.error.bind(console, `Error ${error}`));
    }

}

export default new NewsResource();