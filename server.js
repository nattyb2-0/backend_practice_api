require('dotenv').config({ silent: true });

// require my dependencies
const express = require('express'),
      logger = require('morgan'),
      bodyParser = require('body-parser'),
      helmet = require('helmet');


//instantiate my app
const app = express()
//adding helmet for security layer
app.use(helmet());


//use my middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(logger('dev'));

//route middlewares
const companyRouter = require('./routes/api/companies')



//use routes
app.get('/',(req,res,next)=>{
  res.status(200).json({
    status: 'success',
    message: 'everything went well with this get request'
  })
})
app.use('/api/companies', companyRouter )


//run server
const port = process.env.PORT || 3000
app.listen(port, ()=>{
  console.log('app is listening on port',port)
})
