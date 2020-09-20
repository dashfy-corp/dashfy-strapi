module.exports = ({ env }) => ({
  host: env('STRAPI_HOST', '0.0.0.0'),
  port: env.int('STRAPI_PORT', 1337),
  admin: {
    autoOpen: false,
    url: env('STRAPI_ADMIN_URL', 'admin'),
    port: env.int('STRAPI_PORT', 8080),
    auth: {
      secret: env('STRAPI_ADMIN_JWT_SECRET', 'ajdhgihjadhadjkasdb'),
    },
  },
});
