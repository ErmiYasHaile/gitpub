const express = require("express");
const app = express();

const drinks = require("./models/drinks");
const food = require("./models/food");

//great notes throughout your server files


//Check that you have your Welcome to the Gitpub App!message displaying

//since you have a home route, why not create linke to the drinks/food index pages
app.get("/", (req, res) => {
  res.send(`
  <h1>Welcome to the Gitpub App!</h1>
  <button><a href='/drinks'>DRINKS</a></button>
  <button><a href='/food'>FOOD</a></button>
  `);
});

// foods list
app.get("/food", (req, res) => {
  //   res.send(food);
  res.render("food_index.ejs", { food });
});

// Create a get route /drinks that will res.send(drinks),which will display your drinks data as json in the browser
// Change your /drinks route to res.renderyour drinks_index.ejs
app.get("/drinks", (req, res) => {
  //   res.send(drinks)
  res.render("drinks_index.ejs", {
    alldrinks: drinks,
  });
});

// Setting up your show route
// Add a new get route for /drinks/:id
app.get("/drinks/:id", (req, res) => {
  //   res.send(req.params.id);
  res.render("drinks_show.ejs", {
    alldrinks: drinks[req.params.id],
  });
});

app.get("/food/:id", (req, res) => {
  res.render("food_show.ejs", { 
    foodList: food[req.params.id] });
});

app.listen(3000, () => {
  console.log("listening to port 3000...");
});
