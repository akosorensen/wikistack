// const path = require("path");
const { addPage } = require("../views");

module.exports = (req, res) => {
  try {
    res.send(addPage());
  } catch (err) {
    console.log(err);
  }
};
