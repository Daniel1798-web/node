
const express = require("express");
//const router = require("./componentes/message/network")
const router = require("./network/routes")


var app = express();
app.use(express.json())
app.use(express.urlencoded({extended : false}))


//app.use(router);
router(app)



/*app.use("/", function(req, res){
    res.send("hola pequeña Osi enojada");
})*/
app.use("/app", express.static("public"));

app.listen(3000);
console.log("la aplicación esta escuchando");