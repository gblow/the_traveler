const router = require('express').Router();
const { Destination, Post } = require('../models');

// GET all destinations for homepage
router.get('/', async (req, res) => {
  try {
    const dbTravelData = await Destination.findAll({
      include: [
        {
          model: Post,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const destinations = dbTravelData.map((Destination) =>
      Destination.get({ plain: true })
    );
    res.render('homepage', {
      destinations,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Destination
router.get('/Destination/:id', async (req, res) => {
  try {
    const dbTravelData = await Destination.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: [
            'id',
            'title',
            'locationName',
            'description',
          ],
        },
      ],
    });

    const Destination = dbTravelData.get({ plain: true });
    res.render('Destination', { Destination, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Post
router.get('/Post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id);

    const Post = dbPostData.get({ plain: true });
    res.render('Post', { Post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
