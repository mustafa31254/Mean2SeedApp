var express=require('express');
var router= express.Router();

var Product= require('../Models/product');


router.get('/',function(req,res,next){
Product.find().exec( function(err,products){
if(err){
  return res.status(500).json({
    title:'Error With retriving the products',
    error:err
  })
}
res.status(200).json({
  products:products
})

})
})
router.get('/:id',(req,res,next)=>{
  Product.findById({_id:req.params.id},(err,product)=>{
if(err){
  return res.status(404).json({
    title:'Error With retriving the product',
    error:err
  })
}
res.status(200).json({product:product}

)

  })
})



router.post('/',(req,res,next)=>{

 var product=new Product( {

   name:req.body.name,
   description:req.body.description,
   price:req.body.price

 })
 product.save(function(err,result){
   if(err){
     return res.status(500).json({
         title:'error occurred  ',
        error:err
     })
   }
   res.status(200).json({ message:'Product saved',
   obj:result
  })
  })




})


module.exports=router;
