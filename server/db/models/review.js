const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
  author: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.STRING,
  },
  review: {
    type: Sequelize.TEXT,
  },
});

module.exports = Review;
