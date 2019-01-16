const mongoose = require("mongoose")
const Items = mongoose.model("items")
module.exports = app => {
    let obj = {
        name: "shlomo"
    }
    app.get("/api/todo", (req, res) => {

        res.send(obj)
    })
  
    app.post("/api/add-todo", (req, res) => {
        // console.log(req.body)
        // res.send("all Good!!!!")
        const { name, message } = req.body
        item=new Items({
            name:name,
            message:message
        })
        item.save().then(res=>{

        }).catch(err=>{

        })
    })

}