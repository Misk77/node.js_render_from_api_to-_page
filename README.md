# node.js_render_from_api_to-_page
Simple Node.js for render  API request to a node.js page
---

npm init 

npm install axios body-parse ejs express                \\pug ,maybe dont use pug for easier understanding 

npm  install --save-dev nodemon       \\ for seing changes direclt then we work on the frontend



DIRECTORIES:
Views:
like html, how to see things

apitest.ejs

Route:
funtionallity for the view file, behaviours 

apitest.js


APP.JS
Here we set the apps configuration
Also here we set routes and where the route are going to:

const apiRoute = require('./src/routes/apitest')
      - Here we set variable to point to its source

So then use this newsRoute it look into the  news.js in routes and see what to do with the data and using the news.js in views to render/show it as we expected
app.use('/apitest', apiRoute)

This tells that /apitest using the newsRoute


test on:
| http://localhost:5000/apitest





NEXT:

Now we can use this apiRoute to create a new page in the views DIR, for adding css(design, layout)
