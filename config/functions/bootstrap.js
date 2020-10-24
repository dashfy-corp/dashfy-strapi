'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

const createAdminUser = async () => {
  // Required fields:
  const { ADMIN_USER, ADMIN_PASSWORD, ADMIN_EMAIL } = process.env

  if (ADMIN_USER && ADMIN_PASSWORD && ADMIN_EMAIL) {
    const params = {
      username: ADMIN_USER,
      password: ADMIN_PASSWORD,
      email: ADMIN_EMAIL,
      blocked: false,
      isActive: true
    };

    const admins = await strapi
      .query('user', 'admin').find({ _limit: 1 });

    if (!admins.length) {
      const adminRole = await strapi
        .query('role', 'admin')
        .findOne({ _where: {code: 'strapi-super-admin'} });

      params.roles = [adminRole]
      // Hash password before storing in the database
      params.password = await strapi.admin.services.auth.hashPassword(params.password);

      try {
        // Create admin account
        const admin = await strapi.query('user', 'admin').create(params);

        strapi.log.info('(Admin) Account created:', admin);

      } catch (error) {
        strapi.log.error(error);
      }
      return
    }

    strapi.log.info('(Admin) user found, skipping admin user creation.', admins);
  }
}

module.exports = async () => {
  await createAdminUser()
};
