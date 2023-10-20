const Car = require('../models/car');




const index = ( req, res) =>{
    res.render('cars/index',{
        cars: Car.getAll()
    });
  
}


const show = (req,res)=>{
    res.render('cars/show',{
        car: Car.getOne(req.params.id)
    })
}




module.exports ={
    index,
    show
}