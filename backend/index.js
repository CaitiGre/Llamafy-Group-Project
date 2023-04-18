const express = require('express');
const bodyParser = require('body-parser');
const registrationPageRouter = require('./routes/RegistrationPage');

const app = express();
const port = process.env.PORT || 3006;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/registration', registrationPageRouter);

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
