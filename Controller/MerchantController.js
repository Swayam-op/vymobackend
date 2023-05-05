const MerchantModel = require("../Models/MerchantModel");
const url = require("url");

function isValidUrl(str) {
    try {
        const parsedUrl = url.parse(str);
        return parsedUrl.host !== null;
    } catch (err) {
        return false;
    }
}

function validatePhoneNumber(phoneNumber) {
    const phoneNumberRegex = /^[0-9]{10}$/;
    return phoneNumberRegex.test(phoneNumber);
}


/*Add Merchant Details */
async function addMerchantDetails(req, res) {
    const data = req.body;
    // console.log(data);
    const { restaurantName, contactName, pincode, location, website, phoneNumber, averageDailyTransaction } = data;

    //Check all the variable have some value
    if (!restaurantName || !contactName || !pincode || !location || !website || !phoneNumber || !averageDailyTransaction) {
        return res.status(400).send({ message: "Not any filed can be empty.", success: false });
    }

    try {
        //Check whether these details already exist in database or not
        const isRestaurantNameExist = await MerchantModel.countDocuments({ restaurantName });
        const isWebsiteExist = await MerchantModel.countDocuments({ website });
        const isPhoneNumberExist = await MerchantModel.countDocuments({ phoneNumber });
        if (isRestaurantNameExist) {
            return res.status(409).send({ message: "This restaurant name is already present.", success: false });
        }
        if (!isValidUrl(website)) {
            return res.status(409).send({ message: "Invalid website link", success: false });
        }
        if (isWebsiteExist) {
            return res.status(409).send({ message: "This website is already present.", success: false });
        }
        if (isPhoneNumberExist) {
            return res.status(409).send({ message: "This phone number is already present.", success: false });
        }
        if (!validatePhoneNumber(phoneNumber)) {
            return res.status(409).send({ message: "Invalid phone number.", success: false });
        }
        //Create a new Marchant and save it
        const newMerchant = new MerchantModel({ ...data });
        await newMerchant.save();

        return res.status(200).send({ message: "Merchant details is successfully registered.", success: true });
    }
    catch (error) {
        // console.log(error);
        if (error.code === 11000) {
            const field = error.message.split('index: ')[1].split('_')[0];
            const value = error.message.split('dup key')[1].split(': ')[1].split(' }')[0];
            return res.status(409).send({ message: `${field} already exists`, success: false });
        }
        return res.status(500).send({ message: "Server Error.", success: false });
    }
}

async function getMerchantDetails(req, res) {
    try {
        const merchantList = await MerchantModel.find({});
        return res.status(200).send({ merchantList, success: true });
    }
    catch (error) {
        return res.status(500).send({ message: "Server Error.", success: false });
    }
}

module.exports = { addMerchantDetails, getMerchantDetails };