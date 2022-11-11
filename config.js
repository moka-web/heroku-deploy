// Config Mongo DB Atlas
const mongoose = require("mongoose");
const {loggerError} = require('./utils/loggers')

const connectMDB = async () => {
  try {
    const URL =
      "mongodb+srv://TomasJuarez:432373427473@cluster0.818d8oc.mongodb.net/test";
    mongoose.createConnection(URL, {
      useNewUrlParser: true,
      useUniFiedTopology: true,
    });
  } catch (error) {
    loggerError({error:error.message})
    
  }
};

const disconnectMDB = () => {
  mongoose.disconnect();
};

// config.js
module.exports = {
  PERSIST_CHATS: "./chats/ChatsDaoMongoDb",
  connectMDB,
  disconnectMDB,
};
