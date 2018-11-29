import setup from './setup';

const {request, app} = setup();

describe('/', () => {
  test('it should be healthy', done => {
    request.get('/docs').then(response => {
      expect(response.status).toBe(200);
      done();
    });
  });
});
