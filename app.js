/***
 * Req modules
 */
const express = require("express")

const app = express()

/***
 * App variable
 */
const port = process.env.PORT || "5000"


/***
 * app config
 * static files
 */
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

/***
 *  Templateing Engine we using
 */
app.set('views', './src/views')
app.set('view engine', 'ejs')

/*** *  Routes 
 */
const apiRoute = require('./src/routes/apitest')

app.use('/apitest', apiRoute)

/***
 * Server activate
 * Listening port
 */
app.listen(port, () => console.log(`Server is Listening on port: ${port}`))