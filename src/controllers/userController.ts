const { UserModel } = require('../models')

module.exports = {
  fetchUsers: async (req, res) => {
    const users = await UserModel.find({})

    res.status(200).send(users)
  },
  addUser: async (req, res) => {
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
}