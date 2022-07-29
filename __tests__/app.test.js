const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');



describe('tests', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('gets list of cats', async () => {
    const resp = await request(app).get('/stuff');
    expect(resp.body.length).toEqual(2);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
    });
  });
  it('get /stuff/2 shows cat id stuff', async () => {
    const resp = await request(app).get('/stuff/2');
    console.log(resp.body);
    expect(resp.body).toEqual({
      id:'2',
      name:'keyboard',
      dontGet:'dont do it'
    });
  });
  afterAll(() => {
    pool.end();
  });
});
