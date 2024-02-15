const router = require('express').Router();
const fs = require('fs');
const { User, Location, BlogPost, Image } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', withAuth, async (req, res) => {
  console.log(req.session)
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('/', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/', async (req,res) => {

})
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/blogPost', async (req, res) => {
  try {
    const postData = await BlogPost.findAll();

    const blogPosts = dbBlogData.map((postData) =>
      postData.get({ plain: true })
    );
    res.render('/', {
      blogPosts,
      postData,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;