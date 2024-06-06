// drizzle.config.js
module.exports = {
    db: {
      client: process.env.NODE_ENV === 'production' ? 'pg' : 'sqlite',
      connection: process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : './dev.sqlite3',
    },
  };
  