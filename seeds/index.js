const sequelize = require('../config/connection');
const seedDestinations = require('./destinationData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedDestinations();

  process.exit(0);
};

seedAll();

const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
