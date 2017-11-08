
const database = require('../db/dbConnection')

module.exports={
  getAllCompanies: (req,res,next)=>{
    database.any(`Select * from companies`)
    .then((datafromquery)=>{
      res.companies = datafromquery
      next()
    })
    .catch(err=> next(err))
  }
}




