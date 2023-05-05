const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const helmet = require("helmet");
const cors = require("cors");
const MerchantRouter = require("./Router/MerchantRouter.js");

const app = express();
dotenv.config({path:'./config.env'});

/* app configuration */
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors()); 

//Getting env values
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

(()=>{
    mongoose.connect(MONGO_URL,{
        useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("Mongodb is connected successfully");
        app.listen(PORT, ()=>{
            console.log(`Server is running on ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log("Error in mongodb");
    })
})();

/* Routes */
app.use('/api',MerchantRouter);



