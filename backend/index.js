
const express = require('express');
const bodyParser = require('body-parser');
const registrationPageRouter = require('./routes/RegistrationPage');
const authenticationRouter = require('./routes/Authentication');
const authenticationController = require('./controllers/Authentication');
const passport = authenticationController.passport;
const wardrobePageRouter = require("./routes/WardrobePage");
const settingsProfilePageRouter = require("./routes/SettingsProfilePage");
const settingsWardrobePageRouter = require("./routes/SettingsWardrobePage");
const weatherProxy = require('./routes/WeatherProxy');
const session = require('express-session');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3006;

// Add CORS middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true
}));

//express-session middleware
app.use(session({
  secret: 'i-like-butterchicken',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
    //eq. 1 day
  }
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// Routes here
app.use('/weather', weatherProxy);
app.use("/registration", registrationPageRouter);
app.use("/wardrobeSelection", wardrobePageRouter);
app.use("/auth", authenticationRouter);
app.use("/profile", settingsProfilePageRouter);
app.use("/wardrobe", settingsWardrobePageRouter);

//receive and direct request for authentication.
app.get('/', (req, res) => {
  res.send('Llamify server is running');

});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
