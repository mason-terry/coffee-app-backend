export const welcome = async (req, res) => {
  res.status(200).send({ success: true, message: 'Welcome to our api' })
}