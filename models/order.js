var mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/restaurant");

var orderSchema=new mongoose.Schema({
    name:String,
    value:Number
});

var Order=mongoose.model("Order",orderSchema);
module.exports=Order;