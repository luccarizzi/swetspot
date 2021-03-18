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

app.get('/api/blog', (req, res, next) => {
  const sql = `
    select "postId", "title", "image"
    from "posts"
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/blog-page', (req, res, next) => {
  const sql = `
    select "postId", "title", "date", "image", "preview"
    from "posts"
  `;
  db.query(sql)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/blog-page/:postId', (req, res, next) => {
  const postId = parseInt(req.params.postId, 10);
  if (postId < 1 || !postId) {
    throw new ClientError(400, 'postId must be a positive integer');
  }
  const data = {};
  const params = [postId];
  const sqlPost = `
    select "postId", "title", "date", "image", "author"
    from "posts"
    where "postId" = $1
  `;
  const sqlParagraph = `
    select "paragraphId", "text"
    from "postParagraph"
    join "paragraphs" using ("paragraphId")
    where "postId" = $1
  `;
  db
    .query(sqlPost, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(404, `cannot find post with postId ${postId}`);
      }
      data.post = result.rows;
      return db.query(sqlParagraph, params);
    })
    .then(result => {
      data.paragraph = result.rows;
      res.json(data);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
