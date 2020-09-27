module.exports = ({ env }) => ({
  host: env('API_HOST', '0.0.0.0'),
  port: env.int('API_PORT', 1337),
  admin: {
    autoOpen: false,
    url: env('ADMIN_URL', 'admin'),
    port: env.int('PORT', 8080),
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ajdhgihjadhadjkasdb'),
    },
  },
});
