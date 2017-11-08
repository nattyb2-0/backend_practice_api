
const database = require('../db/dbConnection')

module.exports={
  getAllCompanies: (req,res,next)=>{
    database.any(`Select * from companies`)
    .then((datafromquery)=>{
      res.companies = datafromquery
      next()
    })
    .catch(err=> next(err))
  },
  addCompany: (req,res,next)=>{
    database.one(`insert into companies (name, location, type, numOfEmplyees, vacancy) VALUES ($1, $2, $3, $4, $5) RETURNING ID ;`,
      [req.body.name, req.body.location, req.body.type, parseInt(req.body.numOfEmplyees), req.body.vacancy])
    .then((queryresult)=>{
      console.log(queryresult)
      res.id = queryresult
      next()
    })
    .catch(err=>next(err))
  },
  getACompany: (req,res,next)=>{
    database.one(`select * from companies where ID=$1`,[parseInt(req.params.id)])
      .then((queryresult)=>{
        res.company = queryresult
        next()
      })
      .catch(err=>next(err))
  },
  editACompany: (req, res, next)=> {
    console.log('req.body.id',req.body.id)
    console.log('req.body', req.body)
    const int = parseInt(req.body.id)
    database.none(`update companies set name=$1, location=$2, type=$3, numOfEmplyees=$4, vacancy=$5 where ID=$6 ;`,
    [req.body.name, req.body.location, req.body.type, parseInt(req.body.numOfEmplyees), req.body.vacancy, parseInt(req.params.id)])
    .then((queryresult)=>{
      res.result = queryresult
      next()
    })
    .catch(function (err) {
      return next(err);
    });

},
deleteCompany: (req, res, next) =>{
  var id = parseInt(req.params.id);
  database.result(`delete from companies where Id = $1`, [id])
    .then(()=>{
      res.message = "company has been deleted"
      next()
    })
    .catch(function (err) {
      return next(err);
    });
}
}




