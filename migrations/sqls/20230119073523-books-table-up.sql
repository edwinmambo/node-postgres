CREATE TABLE books(
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  author VARCHAR(50),
  total_pages INTEGER,
  book_type VARCHAR(50),
  summary TEXT
);


-- INSERT INTO books (
--   title,
--   author,
--   total_pages,
--   book_type,
--   summary
-- )
-- VALUES(
--   'Bridge to Terabithia',
--   'Katherine Paterson',
--   208,
--   'childrens',
--   'A good book'
-- );