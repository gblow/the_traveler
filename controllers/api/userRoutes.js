const router = require('express').Router();
const { User } = require('../../models/index.js');

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
  