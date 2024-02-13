const path = require('path');
const express = require('express');
const router = require('express').Router()
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
const { validate, ValidationError, Joi } = require('express-validation')

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

router.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
