import * as jwt from 'jsonwebtoken' 
const secret = 'ocuqpvgtta'

export const getToken = async user => {
  try {
    return await jwt.sign({ user }, secret)
  } catch (err) {
    throw err
  }
}
export const verifyToken = async token => {
  try {
    return await jwt.verify(token, secret)
  } catch (err) {
    return err
  }
}