import app from "./app";
const listEndpoints = require('express-list-endpoints');

class server{

    constructor() {
        this.listen()
    }

    listen(){
        app.listen(process.env.API_PORT, () => {
        });
        this.endpointsList();
    }

    endpointsList(){
        let endpoints = listEndpoints(app);
        console.table(endpoints)
    }
}
export default new server();