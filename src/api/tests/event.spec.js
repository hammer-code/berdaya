import setup from './setup';

const {request, app, database} = setup();

let dbConn = null;

beforeAll(async () => {
  dbConn = await database.connect();
});

afterAll(async () => {
  await database.purgeCollection(dbConn);
  await database.disconnect(dbConn);
});

describe('GET /api/events', () => {
  // Todo: seed db with pre-populated events. Make sure those included in the response
  test('it should able to get list of events', done => {
    request.get('/api/events').then(response => {
      expect(response.status).toBe(200);
      done();
    });
  });
});

describe('POST /api/events', () => {
  test('it should return 422 when `name` is missing', done => {
    request
      .post('/api/events')
      .send({
        venue: 'Awesome Co-working Space',
        coordinate: '0.1,0.2',
        date: '2018-10-01',
      })
      .set('Content-Type', 'application/json')
      .then(response => {
        expect(response.status).toBe(422);
        done();
      });
  });

  test('it should return 422 when `venue` is missing', done => {
    request
      .post('/api/events')
      .send({
        name: 'Techtalk #1',
        coordinate: '0.1,0.2',
        date: '2018-10-01',
      })
      .set('Content-Type', 'application/json')
      .then(response => {
        expect(response.status).toBe(422);
        done();
      });
  });

  test('it should return 422 when `coordinate` is missing', done => {
    request
      .post('/api/events')
      .send({
        name: 'Techtalk #1',
        venue: 'Awesome Co-working Space',
        date: '2018-10-01',
      })
      .set('Content-Type', 'application/json')
      .then(response => {
        expect(response.status).toBe(422);
        done();
      });
  });

  test('it should return 422 when `date` is missing', done => {
    request
      .post('/api/events')
      .send({
        name: 'Techtalk #1',
        venue: 'Awesome Co-working Space',
        coordinate: '0.1,0.2',
      })
      .set('Content-Type', 'application/json')
      .then(response => {
        expect(response.status).toBe(422);
        done();
      });
  });

  test('it should return 200 when able to create new event', done => {
    request
      .post('/api/events')
      .send({
        name: 'Techtalk #1',
        venue: 'Awesome Co-working Space',
        coordinate: '0.1,0.2',
        date: '2018-10-01',
      })
      .set('Content-Type', 'application/json')
      .then(response => {
        const {status, body} = response;
        expect(body.event.name).toBe('Techtalk #1');
        expect(response.status).toBe(201);
        done();
      });
  });
});
