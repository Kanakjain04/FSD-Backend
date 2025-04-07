import express, { request } from "express";
const app = express();
app.get('/',(req,res)=>{
    res.send("Hello!!");
});
app.get('/api/:name/:age',(req,res)=>{
    try{
        const data = req.params;
    res.send(hello ${data.name} and age is ${data.age}); // write in browser(http://localhost:3000/api/Khushi/21)
    } catch(error){
        console.log(error.message);
    }
})
app.get('/api',(req,res)=>{
    try{
        //const {data} = req.query;
    const {name,rollno} = req.query; // object destructuring
    //console.log(data);// in terminal
    if(!name){
        res.send({
            status: 404, message: "Name is required"
        });
        response.status(404).send("Name is required");
    }
    else{
        res.send(Hello ${name} and my roll no is ${rollno}); // write in browser(http://localhost:3000/api?name=Khushi&rollno=34)
    }
    //res.send(Hello ${name} and my roll no is ${rollno}); // write in browser(http://localhost:3000/api?name=Khushi&rollno=34)
    } catch(error){
        console.log(error.message);
    }
});
const port = 3000;
app.listen(port,()=>{
    console.log(server is running at http://localhost: ${port});
});