const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).json({
        message : "Welcome to my app",
    })
})

app.listen(process.env.PORT || 3000)