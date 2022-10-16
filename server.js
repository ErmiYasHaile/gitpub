const express = require('express')
const app = express();

const drinks = require('./models/drinks')


//Check that you have your Welcome to the Gitpub App!message displaying
app.get('/',(req, res)=>{
    res.send('Welcome to the Gitpub App!')
})

// Create a get route /drinks that will res.send(drinks),which will display your drinks data as json in the browser
// Change your /drinks route to res.renderyour drinks_index.ejs
app.get('/drinks', (req, res)=>{
    // res.send(drinks)
    res.render('drinks_index.ejs',{alldrinks: drinks})
})

// Setting up your show route
// Add a new get route for /drinks/:id
 app.get('drinks/:id',(req, res)=>{
    res.send(req.params.id)
 })





app.listen(3000,()=>{
    console.log('listening to port 3000...')
})