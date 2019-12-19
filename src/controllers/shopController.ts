import { Api } from '../utils/yelp'

export const fetchShopsByZipcode = async (req, res) => {
  const zipcode = req.params.zipcode

  try {
    const response = await Api.get(`businesses/search?term=coffee&location=${zipcode}`)
    res.status(200).send({ success: true, shops: response.data.businesses })
  } catch (err) {
    res.status(400).send({ success: false, err })
  }
}

export const fetchShopsByCurrentLocation = async (req, res) => {
  const lat = req.params.lat
  const long = req.params.long

  try {
    const response = await Api.get(`businesses/search?term=coffee&latitude=${lat}&longitude=${long}`)
    res.status(200).send({ success: true, shops: response.data.businesses })
  } catch (err) {
    res.status(400).send({ success: false, err })
  }
}