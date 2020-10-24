module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: env('DATABASE_CLIENT', 'sqlite') === 'mongo' ? 'mongoose' : 'bookshelf',
      settings: {
        client: env('DATABASE_CLIENT', 'sqlite'),
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        uri: env('DATABASE_URI'),
        host: env('DATABASE_HOST'),
        port: env('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        timezone: env('DATABASE_TIMEZONE', 'utc'),
        schema: env('DATABASE_SCHEMA', 'public'),
        ssl: env('DATABASE_SSL')
      },
      options: {
        debug: env.bool('DATABASE_DEBUG', false),
      },
    },
  },
});
