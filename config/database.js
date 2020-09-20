module.exports = ({ env }) => {
  let settings = {
    client: 'sqlite',
    filename: env('DATABASE_FILENAME', '.tmp/data.db'),
  }

  if (env('STRAPI_DATABASE_CLIENT', 'bookshelf') === 'mongoose') {
    settings = {
      uri: env('STRAPI_DATABASE_URI'),
    }
  }


  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: env('STRAPI_DATABASE_CLIENT', 'bookshelf'),
        settings,
        options: {
          ssl: true,
          useNullAsDefault: true,
        },
      },
    },
  }
};
