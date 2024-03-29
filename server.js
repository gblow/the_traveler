const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers')
const sequelize = require('./config/connection');
const withAuth = require('./utils/auth');
const postValidator = require('./utils/postValidator');
const uploadImg = require('./utils/upload');


const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
};


app.use(session(sess));

const hbs = exphbs.create({ withAuth, postValidator, uploadImg });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sess));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT || 3306, () => console.log('Now listening'));
});
