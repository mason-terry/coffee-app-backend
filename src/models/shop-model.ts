const mongooseForShop = require('mongoose')
const SchemaForShop = mongooseForShop.Schema

const ShopSchema = new SchemaForShop({
  name: String,
  yelpId: String,
  outlets: String,
  createdOn: Date,
  updatedOn: Date
})

const Shop = mongooseForShop.model('Shop', ShopSchema)
module.exports = Shop