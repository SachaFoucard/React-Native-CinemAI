const userRoutes = require('express').Router()
const UserModel = require('../Models/users.model')

userRoutes.post('/register', async (req, res) => {
  try {
    const { name, mail, password } = req.body;

    if (!name || !mail || !password) {
      return res.status(400).json({ error: 'Check your fields, one or more are empty' });
    }

    const user = await UserModel.Register(name, mail, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

userRoutes.post('/login', async (req, res) => {
  let { mail, password } = req.body;

  let user = await UserModel.Login(mail, password)
  if (!user) {
    res.status(401).json({ message: 'user not found' })
  }
  else {
    res.status(200).json(user)
  }
})

userRoutes.post('/addFilm', async (req, res) => {
  let { _id, obj } = req.body;
   let user = await UserModel.AddFavtoPlaylist(_id, obj);
   res.status(201).json(user)
  }
)

module.exports = userRoutes