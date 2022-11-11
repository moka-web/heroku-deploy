const ContenedorMongoDb = require("../../contenedores/ContenedorMongoDb");
const SchemaChat = require("../../modelsMDB/schemaChat");

class ChatsDaoMongoDb extends ContenedorMongoDb {
  constructor() {
    super(SchemaChat);
  }
}

module.exports = ChatsDaoMongoDb;
