const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack");

const Page = db.define("page", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    notEmpty: true,
  },
  status: {
    type: Sequelize.ENUM("open", "closed"),
    defaultValue: "open",
  },
});

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    isAlpha: true,
    notEmpty: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    isEmail: true,
    notEmpty: true,
  },
});

module.exports = { db, Page, User };
