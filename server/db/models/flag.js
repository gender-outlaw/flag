const Sequelize = require('sequelize')
const db = require('../db')

const Flag = db.define('flag', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  altname: {
    type: Sequelize.STRING,
    unique: true
  },
  descripton: {
    type: Sequelize.STRING
  },
  controversial: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  tags: {
    type: Sequelize.STRING,
    isIn: [['inclusion', 'POC', 'historic']]
  },
  creator: {
    type: Sequelize.STRING
  },
  imageurl: {
    type: Sequelize.STRING,
    unique: true
  },
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true
  }
})

Flag.addHook('beforeValidate', (flag, options) => {
  const n = flag.name.toLowerCase()
  const y = flag.year
  flag.id = n + y
})
module.exports = Flag
