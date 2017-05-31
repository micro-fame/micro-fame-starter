const { Boot } = require('micro-fame');

const app = Boot({ rootDir: __dirname });
module.exports = () => app;
