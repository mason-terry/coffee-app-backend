const { UserModel } = require('../models')
import * as bycrypt from '../utils/bcrypt'
import * as token from '../utils/token'

export const addUser = async (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const username = req.body.username
  const password = await bycrypt.encryptPassword(req.body.password)
  const createdOn = new Date()

  const newUser = await new UserModel({
    name,
    email,
    username,
    password,
    createdOn
  })

  const userToken = await token.getToken(newUser)

  newUser.save(err => {
    if (err) res.status(400).send({ success: false, message: `Something went wrong: ${err}`})
  })
  res.status(200).send({
    success: true,
    message: 'User added successfully!',
    newUser,
    token: userToken
  })
}

export const login = async (req, res) => {
  const username = req.body.username
  const password = req.body.password

  const user = await UserModel.findOne({ username })

  if (user) {
    const validPassword = await bycrypt.comparePassword(password, user.password)

    if (validPassword) {
      const userToken = await token.getToken(user)
      res.status(200).send({ success: true, message: 'Here is the user you are looking for', user, token: userToken })
    } else {
      res.status(200).send({
        success: false,
        message: `That doesn't seem to be the correct password...`
      })
    }
  } else {
   res.status(200).send({ success: false, message: 'We were not able to find that user' })
  }
}