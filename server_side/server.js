const express = require('express')
const app = express()


const Port = 3005

const server = app.listen(Port,()=>{
    console.log('listening on port '+Port)
})

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.post('/products',(req,res)=>{
    console.log(req.body)
    console.log('entered')
    res.status(200).json({success:'product added'})
})

app.get('/pro',(req,res)=>{
    res.status(200).json({success:'get all products'})
})