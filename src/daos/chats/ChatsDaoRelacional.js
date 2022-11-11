const ContenedorRelacional = require("../../contenedores/ContenedorRelacional");

class ChatsDaoRelacional extends ContenedorRelacional {
  constructor() {
    super("chats");
  }
}

module.exports = ChatsDaoRelacional;
