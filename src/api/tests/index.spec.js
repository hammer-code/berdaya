import setup from './setup';

const {request, app, database} = setup();

let dbConn = null;

beforeAll(() => {
  database.connect().then(conn => {
    dbConn = conn;
  });
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

describe('GET /api/events', () => {
  test('it should able to get list of events', done => {
    request.get('/api/events').then(response => {
      expect(response.status).toBe(200);
      done();
    });
  });
});
