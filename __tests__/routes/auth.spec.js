const request = require('supertest');
const app = require('../app');

const timeout = 60000;

beforeAll((done) => {
  done();
});

describe('post /auth', () => {
  it('should register new user', async () => {
    const response = await request(app)
      .post('/auth/register')
      .send({
        mail: 'teste@teste', password: 'senha123', name: 'Test', company: 'test',
      });

    expect(response.statusCode).toEqual(200);
  }, timeout);

  it('should responds authorized with json', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ mail: 'mathec@live.com', password: 'senha123' });

    expect(response.statusCode).toEqual(200);
  }, timeout);

  it('should responds unauthorized', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ mail: 'teste@teste', password: 'senha123' });

    expect(response.statusCode).toEqual(401);
  }, timeout);

  it('should responds authorized with json', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ mail: 'mathec@live.com', password: 'senha123' });

    expect(response.statusCode).toEqual(200);
  }, timeout);
});
