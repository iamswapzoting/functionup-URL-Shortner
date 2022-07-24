const express=require('express')
const mongoose= require('mongoose')
const route =require('./routes/route')

const app=express()

app.use(express.json())

mongoose
    .connect(
        'mongodb+srv://rohit_sonawane:SuperSu@cluster0.e9hjfiy.mongodb.net/group31Database'
    )
    .then(() => console.log('MongoDb is connected'))
    .catch(err => console.log(err));

app.use('/', route);
app.use("*", function(req,res){
    res.status(404).send({
        status:false,
        message:"the API you request not available"
    })
})


app.listen(process.env.PORT || 3000, function () {
    console.log(`Express app running on port ${process.env.PORT || 3000}`);
});