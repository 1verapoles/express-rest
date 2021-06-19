export { };
const { PORT } = require('./common/config');
const app = require('./app');
const { TryDBConnect } = require('./common/typeorm/connection');

// app.listen(PORT, () =>
//   console.log(`App is running on http://localhost:${PORT}`)
// );

TryDBConnect(() => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});
