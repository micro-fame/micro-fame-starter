const { Boot } = require('micro-fame');

const app = Boot({ rootDir: __dirname });
console.log('fdfd', app);
module.exports = () => app;
