const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts Api",
    description: "Contacts Api",
  },
  host: "localhost:3001",
  schemes: ["http", "https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

// this will generate swaggerAutogen.json

swaggerAutogen(outputFile, endpointsFiles, doc);
