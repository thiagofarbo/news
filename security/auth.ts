import * as jwt from "jsonwebtoken";
import Configs from "./configs";

class Auth {

    validade(request, response, next){

        var token = request.headers['x-access-token'];
        
        if(token){

            jwt.verify(token, Configs.secret, function(error, decoded){

                if(error){
                    return response.status(403).send({
                        success: false,
                        message: '403 - Invalid Token'
                    });
                }else{
                    next();
                }
            });
            
        }else{
            return response.status(401).send({
                success: false,
                message: '401 - Unauthorized'

            });
        }
    }
}
export default new Auth();