const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/stuff should list some stuff', async () => {
    const resp = await request(app).get('/cats');
    expect(resp.body.length).toEqual(8);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
    })
    expect(res.body).toEqual(expected);
  });
  it('get /stuff/2 shows thing details', async () => {
    const resp = await request(app).get('/cats/2');
    console.log(resp.body);
    expect(resp.body).toEqual({
      id: '2',
      name: 'thing 2',
      dontGet: 'dont get this'
    });
  });
  afterAll(() => {
    pool.end();
  });
});
