const { faker } = require("@faker-js/faker");

const generarProducto = (id) => {
  return {
    id,
    title: faker.commerce.product(),
    price: faker.commerce.price(),
    thumbnail: faker.image.avatar(),
  };
};

module.exports = { generarProducto };
