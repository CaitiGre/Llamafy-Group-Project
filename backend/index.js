const express = require("express");
const bodyParser = require("body-parser");
const registrationPageRouter = require("./routes/RegistrationPage");
const wardrobePageRouter = require("/routes/WardrobePage");

const app = express();
const port = process.env.PORT || 3006;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/registration", registrationPageRouter);
app.use("/wardrobeSelection", wardrobePageRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
