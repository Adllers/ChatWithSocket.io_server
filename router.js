const express = require('express')

const router = express.Router()


router.get('/', (req, res) => {
    res.send('Ok! Server is running!')
})

module.exports = router