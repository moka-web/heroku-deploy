const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema(
  {
    author: {
      id: { type: Object, require: true },
      nombre: { type: String, require: true },
      apellido: { type: String, require: true },
      edad: { type: Number, require: true },
      alias: { type: String, require: true },
      avatar: { type: String, require: true },
      email: { type: String, require: true },
    },
    text: { type: String, require: true },
    timestamp: { type: Number, require: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model("chats", ChatSchema);
