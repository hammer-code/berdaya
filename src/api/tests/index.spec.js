import setup from './setup';

const {request, app, database} = setup();

let dbConn = null;

beforeAll(async () => {
  dbConn = await database.connect();
});

afterAll(() => {
  database.disconnect(dbConn);
});

describe('GET /api/docs', () => {
  test('it should be healthy', done => {
    request.get('/docs').then(response => {
      expect(response.status).toBe(200);
      done();
    });
  });
});
