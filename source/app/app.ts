import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import routes from "./routes/routes";

class App{

    express: express.Application;

    constructor() {
        this.express = express();
        this.middlewares();
        this.router();
    }

    middlewares(){
        this.express.use(express.static('public'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.all('*', function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header('Content-Type', 'application/json');
            next();
        });
    }

    router() {
        this.express.use(routes)
    }
}

export default new App().express;
