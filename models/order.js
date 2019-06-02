var mongoose=require("mongoose");

var orderSchema=new mongoose.Schema({
    name:String,
    value:Number
});

var Order=mongoose.model("Order",orderSchema);
module.exports=Order;