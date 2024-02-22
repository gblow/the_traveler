const router = require('express').Router();
const fs = require('fs');
const { User, Location, BlogPost, Image } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {

  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
 
console.log(req.session);
  res.render('login');
});

router.get('/signup', (req, res) => {
 
  console.log(req.session);
    res.render('signup');
  });

router.get('/postDetails', async (req, res) => {
  try {
    const postData = await BlogPost.findAll();

    const blogPosts = dbBlogData.map((postData) =>
      postData.get({ plain: true })
    );
    res.render('locationDetails', {
      blogPosts,
      postData,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  if (!req.session?.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('dashboard', {
    loggedIn: req.session.logged_in,
  })
  })

module.exports = router;