const request = require ('supertest');
const db = require('../../models');
const app = require('../../app');

describe('endpoint DELETE on route /tournament/{id}', () =>{
  it('should delete tournament on database', async() => {
    const user = await db.Tournament.create({
      id: 1,
      name: "Nome Teste",
      players: 1
    })

    const response = await request(app)
      .delete('/tournaments/1')
      .send()

    expect(response.status).toBe(200);
  });
});