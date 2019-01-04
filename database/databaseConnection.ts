import * as mongoose from 'mongoose';

class Database{

    private URL = 'mongodb://localhost:17017/newsDatabase';

    createConnection(){

        mongoose.connect(this.URL);

    }

}

export default Database;