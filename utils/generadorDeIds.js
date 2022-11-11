const { faker } = require("@faker-js/faker");

const generarId = () => {
  return faker.datatype.uuid();
};

module.exports = { generarId };
