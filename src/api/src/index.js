const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello',
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Hello');
});
