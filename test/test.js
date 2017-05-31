import test from 'ava';
import axios from 'axios';
import path from 'path';

const OK = 'OK';

let url, caller;
const app = require('../src');
test.before(async t => {
  const { address, port } = await app();
  url = `http://${address}:${port}`;
  caller = axios.create({
    baseURL: url,
    timeout: 5000
  });
});

test('index', async t => {
  const { statusText, data } = await caller.get(path.normalize('/no-user/'));
  t.is(statusText, OK);
  t.is(data, 'index');
});
