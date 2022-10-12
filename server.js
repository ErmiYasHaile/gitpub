const express = require('express')
const app = express();

const drinks = require('./models/drinks')


app.get('/drinks', (req, res)=>{
    // res.send(drinks)
    res.render('drinks_index.ejs',{alldrinks: drinks})
})

app.get('/',(req, res)=>{
    res.send('Welcome to the Gitpub App!')
})








app.listen(3000,()=>{
    console.log('listening to port 3000...')
})