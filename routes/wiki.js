module.exports = (req, res) => {
  try {
    console.log("Hello from wiki.js");
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};
