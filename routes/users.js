module.exports = (req, res) => {
  try {
    console.log("Hello from users.js");
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};
