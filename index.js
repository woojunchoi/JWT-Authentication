const express = require('express')
const app = express();
const jwt = require('jsonwebtoken')

app.get('/', (req,res) => {
    res.json({
        message:'welcome to API'
    })
})

app.post('/api/posts', verifyToken, (req,res) => {
    jwt.verify(req.token, 'secret', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        }
        else {
            res.json({
                message:'post created',
                authData
            })
        }
    })
})

app.post('/api/login', (req,res) => {
    const userinfo = {
        id: 1,
        username: 'tim',
        email:'tim@gmail.com'
    }
    jwt.sign({user: userinfo} ,'secret', { expiresIn: '30s' } ,(err,token)=>{
        res.json({
            token
        })
    })
})

//format of token 
// Authroization : bearer <access_token>

//verify token
function verifyToken(req,res,next) {
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken
        next()
    }
    else {
        //forbidden
        res.sendStatus(403)
    }
}

app.listen(4000, () => {
    console.log('connected')
})