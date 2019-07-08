import * as mongoose from 'mongoose';
 
class Database{
    private URL = 'mongodb://localhost:27017/newsDatabase';
    // private URL = 'mongodb://link-db/newsDatabase';
 
    createConnection(){
 
        mongoose.connect(this.URL);
 
    }
 
}
 
export default Database;