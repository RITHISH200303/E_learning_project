const path = require("path");
const express = require("express");
const session = require("express-session");
const mongodbStore = require("connect-mongodb-session");
const demoRoutes = require("./routes/default");
const db = require("./data/database");

const app = express();

const MongoDBStore = mongodbStore(session);

const sessionStore = new MongoDBStore({
  uri: "mongodb://127.0.0.1:27017",
  databaseName: "E_learning_dbs",
  collection: "session",
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "super-secret",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);

app.use(demoRoutes);

app.get("/", function (req, res) {
  res.redirect("/login");
});

app.get("/login", function (req, res) {
  res.render("index");
});
app.use(function(req,res){
  res.status(404).render('includes/404')
})
app.use(function(error,req,res,next){
  res.status(500).render('includes/500')
})
db.connect().then(function () {
  app.listen(3000);
});
