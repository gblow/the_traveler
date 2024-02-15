const router = require('express').Router();
const { User } = require('../../models/User');

router.get('/login', async (req, res) => {
    const userData = await User.findAll().catch((err) => {
      res.json(err);
    })
    const users = userData.map((user) => user.get({ plain: true }));
    res.render('all', { users })
  });
  
router.get('/login/:id', async (req, res) => {
  try {
  const userData = await User.findByPk(req.params.id);
  if(!userData) {
    res.status(400).json({message: 'Invalid! Username or Password is Incorrect.'});
    return;
  }
  const user = userData.get({ plain: true });
  res.render('user', user)
  } catch(err) {
    res.status(500).json(err)
  }
})
 
  module.exports = router;
  