const express = require('express')
const app = express();
const jwt = require('jsonwebtoken')

app.get('/', (req,res) => {
    res.json({
        message:'welcome to API'
    })
})

app.post('/api/posts', (req,res) => {
   res.json({
       message:'post created'
   })
})

app.post('/api/login', (req,res) => {
    const userinfo = {
        id: 1,
        username: 'tim',
        email:'tim@gmail.com'
    }
    jwt.sign({user: username} ,'secret' ,(err,token )=>{
        res.json({
            token
        })
    })
})

app.listen(4000, () => {
    console.log('connected')
})