const request = require('supertest');
const app = require('./app'); 

describe('POST /api/classes', () => {
  it('creates a new class', async () => {
    const response = await request(app)
      .post('/api/classes')
      .send({
        title: 'Math 1300',
        description: 'Calc I',
        startTime: '2022-09-01T09:00:00.000Z',
        endTime: '2022-09-01T10:00:00.000Z'
      })
      .expect(201);

    expect(response.body).toHaveProperty('_id');
    expect(response.body.title).toBe('Math 1300');
    
  });
});
