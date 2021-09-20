const store = require("./store");


function addMessage(user, message)
{
    return new Promise((resolve, reject) => {
        
        if(!user || !message)
        {
            console.error("[messageControler] No hay Usuario o  mensaje")
             reject("Datos incorrectos")
             return false
        }
        const fullMessage = 
        {
            user: user,
            message: message,
            date: new Date()
        };
        console.log(fullMessage)
        store.add(fullMessage)
        resolve(fullMessage)
    })
    

}

function getMessages()
{
    return new Promise((resolve,reject) =>
    {
        resolve(store.myMessage());
    })

}

module.exports =
{
    addMessage,
    getMessages
};