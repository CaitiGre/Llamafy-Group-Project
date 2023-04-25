
const express = require('express');
const bodyParser = require('body-parser');
const registrationPageRouter = require('./routes/RegistrationPage');
const authenticationRouter = require('./routes/Authentication');
const authenticationController = require('./controllers/Authentication');
const passport = authenticationController.passport;
const wardrobePageRouter = require("./routes/WardrobePage");
const weatherProxy = require('./routes/WeatherProxy');


const app = express();
const port = process.env.PORT || 3006;

// Add CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//express-session middleware
app.use(session({
  secret: 'your-session-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
    //eq. 1 day
  }
}));



// Routes here
app.use('/weather', weatherProxy);
app.use("/registration", registrationPageRouter);
app.use("/wardrobeSelection", wardrobePageRouter);
app.use('/auth/login', authenticationRouter);
app.use(passport.initialize());
app.use(passport.session());
//receive and direct request for authentication.

app.get('/', (req, res) => {
  res.send('Llamify server is running');

});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
