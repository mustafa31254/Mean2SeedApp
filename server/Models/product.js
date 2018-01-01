var mongoose= require('mongoose');
var Schema=mongoose.Schema;
mongoose.Promise = require('bluebird');
mongoose.connect("mongodb://localhost/MeanApp",{
  useMongoClient: true 
});
//var bcrypt=require('bcryptjs');
var productSchema=  new Schema({
       name:{type:String,require:true},
    discription:{type:String,require:true},
    price:{type: String}

});
 module.exports=mongoose.model('Product',productSchema);
