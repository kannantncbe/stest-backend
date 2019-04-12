const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    todo_name: {
        type: String
    },
    todo_shopname: {
        type: String
    },
    todo_status: {
        type: String
    }
});

module.exports = mongoose.model('Todo', Todo);