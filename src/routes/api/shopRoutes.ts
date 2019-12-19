const shopRouter = require('express').Router()
import { shopController } from '../../controllers'

shopRouter.route('/zipcode/:zipcode').get(shopController.fetchShopsByZipcode)

shopRouter.route('/location/:lat/:long').get(shopController.fetchShopsByCurrentLocation)

module.exports = shopRouter