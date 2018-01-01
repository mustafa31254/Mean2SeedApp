var express=require('express');
var User=require('../Models/User');
var bcrypt= require('bcryptjs');
var jwt= require('jsonwebtoken');

var router=express.Router();

router.post('/register',function(req,res){
var querry= User.findOne({email:req.body.email}).exec();
querry.then( (user)=>{

if(user){
   return res.status(400).json({ title:"email already exists",error:{message:'Already taken'} })    
}else{
   var user= new User({email:req.body.email,password:bcrypt.hashSync(req.body.password,10)})
   user.save().then((result)=>{
       res.status(201).json(  {
                message:'User saved',
                obj:result
        
            } )
   },(err)=>{
        return  res.status(500).json({
                    title:'Error Occured while saving',
                    error:err
                })  
             })
   
}

} ).catch((err)=>{
    return  res.status(500).json({
                title:'Error Occured while Registering',
                error:err
            })  
         })


})
// var user= new User(
//     {
//         email:req.body.email,
//         password:bcrypt.hashSync(req.body.password,10)
//     }
// )
// user.save(function (err,result) {
//     if(err)
//     return res.status(500).json({
//         title:'Error Occured while saving',
//         error:err
//     })
//     res.status(201).json({
//         message:'User saved',
//         obj:result

//     })
// })
// })

router.post('/login',function(req,res,next){
   var querry= User.findOne({email:req.body.email}).exec();
   querry.then( (user)=>{
    if(!user){
        return res.status(500).json({title:'login failed',error:{message:'Invalid Credentials '} })
    }
    if (!bcrypt.compareSync(req.body.password,user.password))
    {
return res.status(401).json({
title:'login Failed',
error:{message:'Inavalid Credentials wrong password'}
})
    } 
    else{
    var token= jwt.sign({user:user},'supersecret',{expiresIn:7200} );


    res.status(200).json({ message:'Logged In',token:token,userId:user._id})
    }

   })
})


   //      User.findOne({email:req.body.email},function(err,user){
//        if(err){
//            return res.status(500).json({
//                title:'error',
//                error:err
//            })
//        }
//         if(!user){
//             return res.status(500).json({
//                 title:'login failed',
//                 error:{message:'Invalid Credentials '}
//             })
            
//         }
//    if (!bcrypt.compareSync(req.body.password,user.password))
//               {
// return res.status(401).json({
//     title:'login Failed',
//     error:{message:'Inavalid Credentials'}
// })
//               }   
//             var token= jwt.sign({user:user},'supersecret',{expiresIn:7200} );


// res.status(200).json({
//     message:'Logged In',
//     token:token,
//     userId:user._id
// })

//  })


module.exports=router;