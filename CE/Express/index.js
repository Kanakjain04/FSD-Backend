const express=require('express');
// const path = require('path'); 
const app = express();
const port = 3000;
app.use(express.json());
// const array_name=[{
//     name:"kanak"
// }]

// app.get('/',(req,res)=>{
//     // res.send("this is my homepage");
//     res.sendFile(path.join(__dirname,"home.html"));
// })
// app.get('/api/about',(req,res)=>{
//     // res.send("this is my about page");
//     // res.json(array_name);
//     res.sendFile(path.join(__dirname,"about.html"));
// })
// app.get('/contact',(req,res)=>{
//     res.sendFile(path.join(__dirname,"contact.html"));
// })

app.post('/api/abes',(req,res)=>{
    console.log("body is--",req.body)
    res.json({})
})

app.listen(port,()=>{
    console.log(`app is run at:${port}`);
}) 