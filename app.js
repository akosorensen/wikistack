const express = require("express");
const router = express.Router();
const morgan = require("morgan");
const app = express();
const { db, User, Page } = require("./models");
const userRoute = require("./routes/users");
const wikiRoute = require("./routes/wiki");
const addWikiRoute = require("./routes/addWiki");

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.json());

router.get("/users", userRoute);
router.get("/wiki", wikiRoute);
router.get("/wiki/add", addWikiRoute);

router.get("/", (req, res) => {
  try {
    console.log("howdy world");
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const init = async () => {
  // await Page.sync({ force: true });
  // await User.sync({ force: true });
  await db.sync({ force: true });
  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
