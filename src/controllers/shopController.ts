const { ShopModel } = require('../models')
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

export const fetchShopDetails = async (req, res) => {
  const shopId = req.params.shopId

  try {
    const shopInDb = await fetchShopFromDb(shopId)
    const response = await Api.get(`businesses/${shopId}`)
    const shopDetails = { yelpDetails: response.data }
    if (!shopInDb) {
      const newShop = await new ShopModel({ yelpId: response.data.id, name: response.data.name, outlets: 'Not rated yet', createdOn: new Date() })
      newShop.save()
      shopDetails['dbDetails'] = newShop
      res.status(200).send({ success: true, shopDetails })
    } else {
      shopDetails['dbDetails'] = shopInDb
      res.status(200).send({ success: true, shopDetails })
    }
  } catch (err) {
    res.status(400).send({ success: false, err })
  }
}

const fetchShopFromDb = async shopId => {
  return ShopModel.findOne({ yelpId: shopId })
}