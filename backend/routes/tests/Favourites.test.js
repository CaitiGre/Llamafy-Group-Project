const request = require('supertest');
const express = require('express');
const fs = require('fs');
const router = require('../routes/Favourites');  // assuming your route is in a separate file

jest.mock('fs');

const app = express();
app.use(express.json());
app.use('/', router);

describe('Test /all route', () => {

  test('Should respond with 202 status and message if user has no favourites', async () => {
    fs.existsSync.mockReturnValue(false);

    const response = await request(app)
      .post('/all')
      .send({ email: 'empty@nofavourites.com' });

    expect(response.statusCode).toBe(202);
    expect(response.body).toEqual({ message: 'User has no favourites yet' });
  });

  test('Should respond with 500 status if an error occurs while reading directory', async () => {
    fs.existsSync.mockReturnValue(true);
    fs.readdir.mockImplementation((path, cb) => cb(new Error('Unable to find public user folder')));

    const response = await request(app)
      .post('/all')
      .send({ email: 'error@example.com' });

    expect(response.statusCode).toBe(500);
    expect(response.text).toEqual('Unable to find public user folder');
  });

  test('Should respond with 200 status and array of files if user has favourites', async () => {
    fs.existsSync.mockReturnValue(true);
    fs.readdir.mockImplementation((path, cb) => cb(null, ['image1.png', 'image2.jpg']));

    const response = await request(app)
      .post('/all')
      .send({ email: 'test@example.com' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(['image1.png', 'image2.jpg']);
  });

});
