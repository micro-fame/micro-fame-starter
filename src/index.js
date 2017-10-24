const { Boot } = require('micro-fame');

const app = Boot({ rootDir: __dirname }).catch(e => console.log('Error on boot', e));
module.exports = () => app;
