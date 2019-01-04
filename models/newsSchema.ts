import * as mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
    hat: {type: String},
    title: {type: String},
    text: {type: String},
    author: {type: String},
    img: {type: String},
    publishDate: {type: String},
    link: {type: String},
    active: {type: String}
});

export default newsSchema;