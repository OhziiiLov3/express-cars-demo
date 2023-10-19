const Car = require('../models/car');




const index = ( req, res) =>{
    res.render('cars/index',{
        cars: Car.getAll()
    })
  
}





module.exports ={
    index
}