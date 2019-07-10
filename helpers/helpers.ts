class Helper{

    //Metodo para que possamos passar por todas nossas rotas
    sendResponse = function (response, statusCode, data) {
        response.status(statusCode).json({ result: data });
    }
}

export default new Helper();