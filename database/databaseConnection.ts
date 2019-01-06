import * as mongoose from 'mongoose';
 
class Database{
 
    private URL = 'mongodb://link-db/newsDatabase';
 
    createConnection(){
 
        mongoose.connect(this.URL);
 
    }
 
}
 
export default Database;