const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/contactform",{
    useNewUrlParser:true,  
}).then(()=>{
    console.log(`Connection sucessful`);
}).catch((e)=>{
    console.log(`no connection`);
})
// const contact=new mongoose.Schema({
//     name:{
//         type:String,
        
//     },
//     email:{
//         type:String,
//         required:true
//     },
//     Phoneno:{
//         type:Number,
        
//     },
//     message:{
//         type:String,
//         required:true
//     }
// })

// const contactform=new mongoose.model('contactform',contact)

// module.exports=contactform