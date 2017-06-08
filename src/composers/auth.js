const auth = (app) => fn => async (req, res) => {
  console.log('in auth.js', req.url);
  return await fn(req, res);
};

module.exports = auth;
