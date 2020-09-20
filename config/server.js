module.exports = ({ env }) => ({
  host: env('STRAPI_HOST', '0.0.0.0'),
  port: env.int('STRAPI_PORT', 8000),
  admin: {
    auth: {
      secret: env('STRAPI_ADMIN_JWT_SECRET'),
      host: env('STRAPI_ADMIN_HOST', 'admin'),
      port: env.int('STRAPI_ADMIN_PORT', 1337),
    },
  },
});
