const { UserModel } = require('../models')

export const addUser = async (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const username = req.body.username
  const password = req.body.password
  const createdOn = new Date()

  const newUser = await new UserModel({
    name,
    email,
    username,
    password,
    createdOn
  })

  newUser.save(err => {
    if (err) res.status(400).send({ success: false, message: `Something went wrong: ${err}`})
  })
  res.status(200).send({
    success: true,
    message: 'User added successfully!',
    newUser
  })
}

export const login = async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const user = await UserModel.findOne({ username, password })

  if (user) {
    res.status(200).send({ success: true, message: 'Here is the user you are looking for', user })
  } else {
   res.status(200).send({ success: false, message: 'We were not able to find that user' })
  }
}