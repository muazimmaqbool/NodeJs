const mongoose=require('mongoose') //to download mongoose use this command : npm i mongoose

//Note:-> the mongodb server runs on this port: mongodb://localhost:27017/dbName

//step 1: Defining the MongoDB connection URl:
const mongoDbURL='mongodb://localhost:27017/hotels' //here myhotels can be any name

//step 2: set up the mongodb connection:
/*using mongoose.connect() : it establishes a connection to the MongoDB database using the URL and some configuration options:
        useNewUrlPraser, useUnifiedTopology etc, (but these two needs to be passed always)
    this step initializes the connection process but does not actually connects at this point
*/
//at 6:25 of mongoose schema video
//these two paramters are passed because otherwise you will get some warning, they make sure that you are working with latest versions
mongoose.connect(mongoDbURL,{
    useNewUrlPraser:true, 
    useUnifiedTopology:true,
})

//step 3:
const db=mongoose.connection;