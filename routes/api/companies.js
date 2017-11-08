const companyRouter = require('express').Router()

companyRouter.route('/')
  .get((req,res,next)=>{
    const params = req.query;
    console.log('params',params)
    res.send('this is the api result for companies')
  })
  .post((req,res,next)=>{
    res.send('posted to companies')
    next()
  })

companyRouter.route('/:id')
  .get((req,res,next)=>{
    res.send('will get one company')
  })
  .put((req,res,next)=>{
    res.send('updating one company')
  })
  .delete((req,res,next)=>{
    res.send('deleting one company')
  })

module.exports = companyRouter;
