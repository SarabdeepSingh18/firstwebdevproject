const express = require("express");
const app = express();
const path=require("path");
const bodyparser=require("body-parser");
const hbs=require("hbs");
require("./db/conn");
app.use(bodyparser.urlencoded({extended:true}));
const mongoose=require("mongoose");
const port=process.env.PORT || 3000;


const contactform={
    name:String,
    email:String,
    phone:Number,
    message:String
}
const contact=mongoose.model("contact",contactform)

const static_path=path.join(__dirname,"../public")
app.use(express.static(static_path))
app.set("view engine","hbs");
app.get("/",(req,res)=>{
    res.render("index");
    
});
app.get("/gt",(req,res)=>{
    res.render("gt");
    
});
app.get("/contact",(req,res)=>{
    res.render("contact");  
});
app.post("/",function(req,res){
let newcontact=new contact({
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    message:req.body.message

});
 newcontact.save()
 res.redirect("/")
})
  
  
app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})

    
  
    
  
  
  
  
  
  
  