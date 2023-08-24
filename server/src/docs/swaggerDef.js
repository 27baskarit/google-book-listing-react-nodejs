const { version } = require('../../package.json');

const port = 7000;
const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Food App API documentation',
    version,
  }, 
  servers: [
    {
      url: `http://localhost:${port}/`,
    },
  ],
};

module.exports = swaggerDef;
