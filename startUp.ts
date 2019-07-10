import * as express from "express";
import * as bodyParser from 'body-parser';
import Database from './database/databaseConnection';
import NewsResource from './resource/newsResource';
import Auth from "./security/auth";
import uploads from "./helpers/uploads";

class StartUp{
    public app: express.Application;
    private _database: Database;
    private bodyParser;

    constructor() {
        this.app = express();
        this._database = new Database();
        this._database.createConnection();
        this.middler();
        this.routes();
    }

    middler(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    routes(){
 
        this.app.route('/').get((request, response) => {
            response.send({versao : '0.0.1'});
        });

        this.app.route("/uploads").post(uploads.single('file'), (request, response) => {
           
            try{
                response.send('Arquivo enviado com sucesso!');
            }catch(error){
                console.log(error);
            }
        });

        // this.app.use(Auth.validade);

        this.app.route("/api/v1/news").get(NewsResource.get);
        this.app.route("/api/v1/news/:id").get(NewsResource.getById);
        this.app.route("/api/v1/news").post(NewsResource.create);
        this.app.route("/api/v1/news/:id").put(NewsResource.update);
        this.app.route("/api/v1/news/:id").delete(NewsResource.delete);

    }
}
export default new StartUp();