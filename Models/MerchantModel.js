const mongoose = require("mongoose");
const {Schema} = mongoose;

const schema = new Schema({
    restaurantName : {
        type : String,
        trim : true,
        unique : true
    },
    contactName : {
        type : String,
        trim : true
    },
    pincode : {
        type : Number,
        trim : true
    },
    location : {
        type : String,
        trim : true
    },
    website : {
        type : String,
        trim : true,
        unique : true
    },
    phoneNumber : {
        type : Number,
        trim : true,
        unique : true
    },
    averageDailyTransaction : {
        type :  Number,
        trim : true
    }
});

const MerchantModel = mongoose.model('merchant', schema);
module.exports = MerchantModel;