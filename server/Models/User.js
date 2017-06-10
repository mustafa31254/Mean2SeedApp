
var mongoose= require('mongoose');
var Schema=mongoose.Schema;
mongoose.connect("mongodb://localhost/MeanApp");
//var bcrypt=require('bcryptjs');
var mongooseUniqueValidator=require('mongoose-unique-validator');
var userSchema=  new Schema({
    email:{type:String},name:{type:String},
    password:{type:String,require:true}
    //,image:{type:String},role:{type:String},
   // resetPasswordToken:{type: String},
  //resetPasswordExpires:{type: Date}
});
mongoose.plugin(mongooseUniqueValidator);
 module.exports=mongoose.model('User',userSchema);
