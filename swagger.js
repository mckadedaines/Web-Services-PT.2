const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "My API",
    description: "API",
  },
  host: "web-service-pt-2.onrender.com/Inventory",
  host: "web-service-pt-2.onrender.com/motorcycles",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
