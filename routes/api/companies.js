const companyRouter = require('express').Router()
const companyModel = require('../../models/companies')

companyRouter.route('/')
  .get(companyModel.getAllCompanies,(req,res,next)=>{
    const params = req.query;
    console.log('params',params)
    // res.send('this is the api result for companies')
    res.status(200).json({
      status: 'sucess',
      data: res.companies || [],
      message: 'Retrieved all Companies'
    })
  })
  .post(companyModel.addCompany, (req,res,next)=>{
    res.json(res.id)
    next()
  })

companyRouter.route('/:id')
  .get(companyModel.getACompany,(req,res,next)=>{
    res.status(200).json(res.company || [])
  })
  .put(companyModel.editACompany,(req,res,next)=>{
    res.status(200).json({
      status: 'success',
      data: res.result || [],
      message: 'you have succesfully changed a company info'
    })
  })
  .delete(companyModel.deleteCompany,(req,res,next)=>{
    res.status(200).json({
      status: 'success',
      message: res.message

    })
  })

module.exports = companyRouter;
