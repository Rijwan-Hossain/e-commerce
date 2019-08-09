const express = require('express') 
const cors = require('cors') 
const morgan = require('morgan') 
const bodyParser = require('body-parser') 
const mongoose = require('mongoose') 

const app = express() 

// Middlewere 
app.use(cors()) 
app.use(morgan('dev')) 
app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json()) 


// Routers 
// app.use('/api/admin', require('./Routes/adminRoutes')) 
// app.use('/api/users', require('./Routes/userRoutes')) 
// app.use('/api/tutorials', require('./Routes/tutorialRoutes')) 
// app.use('/api/posts', require('./Routes/postRoutes')) 



// Port Number
const PORT = process.env.PORT || 5000 

app.listen(PORT, () => { 
    console.log('App is on fire'); 
    mongoose.connect('mongodb://localhost:27017/e_commerce', 
    {useNewUrlParser: true}, 
    () => { 
        console.log('Database Running'); 
    }); 
}) 



