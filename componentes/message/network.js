
const  express = require("express");
const router = express.Router();
const response = require("../../network/response");
const controler = require("./controler");


router.get("/", function (req, res)
{
    controler.getMessages()
        .then((messageList) => {
            response.succes(req, res, messageList, 200)
        })
            .catch(e =>{
                response.error(req, res, "unexpected error", 500, e)
            })
});


router.post("/", function (req, res)
{
    
    controler.addMessage(req.body.user, req.body.message)
    .then(() => {
        response.succes(req, res, "mensaje creado correctamente", 200);
    })
    .catch(e => {
        response.error(req, res, "información Invalida", 405, "error en el controlador");
    });
   
});

module.exports = router;