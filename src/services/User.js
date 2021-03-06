const { RestService, Remote } = require('micro-fame');

@RestService({
  endpoint: 'no-user'
})
class User {
  @Remote({
    path: '/',
    method: 'get'
  })
  async index() {
    return 'index';
  }

  @Remote({
    path: '/getName',
    method: 'get'
  })
  async getName() {
    return 'hello';
  }

  @Remote({
    path: '/get-with-params/:name/:text'
  })
  async getWithParams(name, text) {
    return {
      name,
      text
    };
  }

  @Remote({
    path: '/getOptionalParam(/:text)',
    method: 'get'
  })
  async getOptionalParam(text) {
    return { text: text };
  }

  @Remote({
    path: '/paramsFromQuery',
    args: {
      text: ({ query: { text } }) => text,
      number: ({ query: { number } }) => number
    }
  })
  async paramsFromQuery(text, number) {
    return { text, number };
  }

  @Remote({
    path: '/mixParams/:name',
    method: 'get',
    args: {
      name: ({ params: { name } }) => name,
      text: ({ query: { text } }) => text,
      number: ({ query: { number } }) => number
    }
  })
  async mixParams(name, text, number) {
    return { name, text, number };
  }

  @Remote({
    path: '/mixParams/:name',
    method: 'post',
    args: {
      name: ({ params: { name } }) => name,
      text: ({ query: { text } }) => text,
      number: ({ body: { number } }) => number
    }
  })
  async mixParamsQB(name, text, number) {
    return { name, text, number };
  }

};

module.exports = User;
