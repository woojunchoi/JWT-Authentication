const express = require('express')
const app = express();

app.get('/', (req,res) => {
    res.json(`<h1>there</h1>`)
})

app.listen(4000, () => {
    console.log('connected')
})