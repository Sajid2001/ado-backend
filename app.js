require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const Song = require('./models/song')



const app = express()
const port = 8000

//connection to mongodb
const dbURI = process.env.MONGODB_URI
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology:true})
    .then((result) => {
        app.listen(port)
        console.log('connected to db');
    })
    .catch((err) => console.log(err));

app.use(morgan('dev'));
app.use(cors());


app.get('/songs', (req,res) => {
    Song.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
    
})

