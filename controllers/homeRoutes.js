const router = require('express').Router();
const fs = require('fs');
const { User, Location, BlogPost, Image } = require('../models');
const withAuth = require('../utils/auth');
const postValid = require('../utils/postValidator');
const uploadImg = require('../utils/upload');


router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
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
  if (req.session?.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/blogPost', async (req, res) => {
  try {
    const postData = await BlogPost.findAll({
      include: [
        {
          model: Location,
          attributes: ['city', 'location']
        },
        {
          model: Image,
          attributes: ['']
        }
      ]
    })
  } catch (err) {

  }
})

module.exports = router;