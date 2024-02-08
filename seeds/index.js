const sequelize = require('../config/connection');
const seedUsers = require('./destinationData');
const seedDestinations = require('./destinationData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedDestinations();

  await seedUsers();

  process.exit(0);
};

seedAll();

