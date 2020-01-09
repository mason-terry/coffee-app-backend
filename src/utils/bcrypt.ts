import * as bcrypt from 'bcrypt'
const saltRounds = 10

export const encryptPassword = async password => {
  try {
    return await bcrypt.hash(password, saltRounds)
  } catch (err) {
    throw err
  }
}
export const comparePassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash)
  } catch (err) {
    throw err
  }
}