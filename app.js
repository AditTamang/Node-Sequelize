const express = require('express')
const app = express()


//Telling the nodemon to set the view-engine to the ejs
app.set("view engine", "ejs")


//Form bata data airaxa pasrse gar or handle gar
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/",(req,res)=>{
    res.render("blogs.ejs")
//    res.json({
//     status: 300,
//     message: "hi"
//    })
})

// app.get("/blog",(req,res)=>{
//     res.render("blogs.ejs")
// })

app.get("/createBlog",(req,res)=>{
    res.render("createBlog")
})


//CreateBlog post
app.post("/createBlog",(req,res)=>{
    console.log(req.body)   //req.body.title gare bhane chai specifically auta matra display garxa aru haruxa
    res.send("Form submitted successfully")
})

const port = 5000
app.listen(port,()=>{
    console.log(`NodeJS project has been started in the port no ${port}`)
})