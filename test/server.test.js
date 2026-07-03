const request = require('supertest');
const server = require('../server');

describe('Server', () => {
  it('responds to GET /', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
  });
});

afterAll(() => {
  server.close();
});