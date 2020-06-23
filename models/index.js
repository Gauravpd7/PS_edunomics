var mongoose = require('mongoose');

mongoose.set('debug',true);
mongoose.connect("mongodb+srv://gaurav:gauravpd7@mongouploads-apdbe.mongodb.net/test?retryWrites=true&w=majority",{useNewUrlParser: true,useFindAndModify: false,useUnifiedTopology: true});

mongoose.Promise = Promise;

module.exports.Coordinate = require("./coordinates");