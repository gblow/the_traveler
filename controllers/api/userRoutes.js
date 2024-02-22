const router = require('express').Router();
const { User } = require('../../models');


// Login route
router.post('/login', async (req, res) => {
  console.log(req.body);
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      console.log(userData);

      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      console.log(validPassword);
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    console.log(req);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.redirect("/dashboard");
    });

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// Signup route
// Define a route for user signup
router.post('/signup', async (req, res) => {
  try {
    // Extract email and password from request body
    const { email, password } = req.body;


    // Create a new user record in the database
    const newUser = await User.create({ email, password });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(201).json(newUser);
    });

    // Return success response with the newly created user data
    
  } catch (error) {
    // Handle any errors that occur during the signup process
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Failed to sign up. Please try again later.' });
  }
});

// Logout route
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;