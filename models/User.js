var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var c = new Schema({
    name: { type: String, default: "" },
    email: { type: String, default: "" },
    password: { type: Number, default: "" },
    role: { type: String, default: "employee" },
    createdDate: { type: Date, default: Date.now },
    modifiedDate: { type: Date, default: "" }
});
module.exports = mongoose.model('User', c);