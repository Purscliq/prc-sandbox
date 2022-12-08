const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser =require('body-parser');
const app = express();
const router = require('./routes/_index')


dotenv.config();
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('DB connected'))
.catch((err) => {
 console.log({message: err});    
});


app.use(express.json());

app.use(bodyParser.json({limit:"30mb", extended: true}));

// Router
app.use('/api', router);


 app.listen( process.env.SERVER_URL || 7000, ()=>{
    console.log('tested');
 });
