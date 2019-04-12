var express=require('express');
var app=express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.use('/', express.static(__dirname + '/'));

app.get('/',(req,res)=>
{
    res.render("../index");
    console.log("homepage logged");
});

app.get('/about',(req,res)=>
{
    res.render("../about");
    console.log("About section logged");
});

app.get('/gallery',(req,res)=>
{
    res.render("../gallery");
    console.log("Gallery logged");
});

app.get('/menu',(req,res)=>{
    res.render("../menu");
    console.log("Menu logged");
});

app.get('/cart',(req,res)=>{
    res.render("../order_online");
    console.log("Cart logged");
});

app.get('/order',(req,res)=>{
    res.render("../order");
    console.log("Ordering....");
});

app.get('/thankyou',(req,res)=>{
    res.render("../order_placed");
    console.log("Thank you");
});

app.get('/feedback',(req,res)=>{
    res.render("../feedback");
    console.log("Thank you for your feedback");
});

const port=process.env.PORT || 3000;

app.listen(port,()=>
{
    console.log(`listening on port ${port}`);
});

