const express = require("express");
const route = express.Router();
const {addMerchantDetails, getMerchantDetails} = require('../Controller/MerchantController')

route.post('/add-merchant-details', addMerchantDetails);
route.get('/get-merchant-details', getMerchantDetails);

module.exports = route;