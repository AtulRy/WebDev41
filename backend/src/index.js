const express=require('express')
const app=express()
const path=require('path')
const hbs=require("hbs")
const collection=require("./mongodb")

const templatePath=path.join(__dirname,"../templates")

app.use(express.json())
app.set("view engine","hbs")
app.set("views",templatePath)

app.use(express.urlencoded({extended:false}))

app.get("/",function(req,res){
    res.render("login")
})
app.get("/signup",function(req,res){
    res.render("signup")
})

app.post("/signup",async function (req,res) {
    const data={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
    await collection.insertMany([data])
    res.render("home")
})



app.listen(3000, function(){
    console.log("port running on 3000");
})
