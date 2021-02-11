const express = require('express')
const apiRouter = express.Router()
const axios = require('axios')

apiRouter.get('', async(req, res) => {
    // res.render('apitest')
    //console.log(apitestAPI.data)

    try {
        const apitestAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`)
        res.render('apitest', { articles: apitestAPI.data })
        console.log(apitestAPI.data)
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.requiest) {
            console.log(err.requiest)
        } else {
            console.error('Error', err.message)
        }

    }




})
module.exports = apiRouter