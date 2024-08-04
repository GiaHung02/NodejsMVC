const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Tour = require("./models/tourModel");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// CONNECT DB
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB).then(() => {
  console.log("DB connection successful!");
});

// Render the list view with tours
app.get("/", async (req, res) => {
  const tours = await Tour.find();
  res.render("listTour.ejs", { tours });
});

app.get("/create", (req, res) => {
  res.render("createTourForm");
});

app.post("/submitTour", async (req, res) => {
  const newTour = await Tour.create(req.body);

  if (newTour) {
    res.redirect("/");
  } else {
    res.redirect("/create");
  }
});

app.get("/update/:id", async (req, res) => {
  const tour = await Tour.findById(req.params.id);

  res.render("updateTour", { data: tour });
});

app.post("/update/:id", async (req, res) => {
  console.log(req.body.id);

  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (tour) {
    res.redirect("/");
  } else {
    res.redirect("/update/:id");
  }
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
