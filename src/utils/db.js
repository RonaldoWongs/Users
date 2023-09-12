const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('postgres', 'fl0user', '8E9FTMUDPrsf', {
  host: 'ep-nameless-truth-91247979.us-east-2.aws.neon.tech',
  dialect: 'postgres',
  dialectOptions: {
    ssl:{
      required:true, rejectUnauthorized: false
    }
  }
});

module.exports = sequelize;
