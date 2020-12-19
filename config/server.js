module.exports = ({ env }) => ({
  host: env('API_HOST', 'localhost'),
  port: env('API_PORT', 1337),
  admin: {
    autoOpen: false,
    host: env('ADMIN_HOST', 'localhost'),
    port: env('ADMIN_PORT', 8000),
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'ajdhgihjadhadjkasdb'),
    },
  },
});
