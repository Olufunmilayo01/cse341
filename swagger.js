const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts Api",
    description: "Contacts Api",
  },
  host: "cse341-k5b5.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

// this will generate swaggerAutogen.json

swaggerAutogen(outputFile, endpointsFiles, doc);
