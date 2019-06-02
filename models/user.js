var mongoose=require("mongoose");
var Order=require("./order");

var userSchema=new mongoose.Schema({
    username:String,
    password:String
});

var User=mongoose.model("User",userSchema);

module.exports=User;