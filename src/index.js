const { Boot } = require('micro-fame');

const app = Boot({ rootDir: __dirname });
console.log(app)
module.exports = () => app;
