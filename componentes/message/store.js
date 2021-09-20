const db = require("mongoose")
const Model = require("./model")

const uri = "mongodb+srv://usuario1:otracontraseña@cluster0.jndnz.mongodb.net/basedate?retryWrites=true&w=majority"


db.Promise = global.Promise;

db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(e => console.error('[db]', "errorrr"));





function addMessage(message)
{
   const myMessage = new Model(message);
   myMessage.save();
}

async function getMessages()
{
    const  messages = await Model.find();
    return messages;
}

module.exports =
{
    add: addMessage,
    list: getMessages
}