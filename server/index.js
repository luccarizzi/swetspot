require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const pg = require('pg');
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
const jsonMiddleware = express.json();
app.use(jsonMiddleware);
app.use(staticMiddleware);

app.get('/api/blog-page', (req, res, next) => {
  const sql = `
    select "postId", "title", "date", "image", "preview"
    from "posts"
  `
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
})

app.get('/api/blog-page/post/:postId', (req, res, next) => {
  res.send(req.params.postId)
})

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
