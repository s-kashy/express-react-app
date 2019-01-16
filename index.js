const express=require("express")
const mongoose = require("mongoose");
var bodyParser = require('body-parser')
const keys=require("./config/key")
var cors = require('cors')
require("./modelScema/toDoItem")
mongoose.connect(keys.MONGO_URL,{ useNewUrlParser: true },(err,db)=>{
    console.log("Mlab connect")
if (err){
    return console.log("Error",err)
}

})

const app = express();
app.use(cors())

app.use(bodyParser.json())
require("./routes/todo")(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("listening on port 5000");
});