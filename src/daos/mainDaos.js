const { PERSIST_CHATS } = require("../../config");

const chatsDaos = require(PERSIST_CHATS);

module.exports = { chatsDaos };
