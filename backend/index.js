const express = require('express');
const bodyParser = require('body-parser');
const registrationPageRouter = require('./routes/RegistrationPage');
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
app.use('/weather', weatherProxy);
app.use('/registration', registrationPageRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
