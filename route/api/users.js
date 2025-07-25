const express=require('express');
const User=require('../../models/users');

const router=express.Router();
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');
const keys=require('../../config/keys');
const validateRegisterInput=require('../../validation/userRegister');
const validateLoginInput=require('../../validation/userLogin');
const validateDateInput=require('../../validation/date');




router.post('/register',(req,res)=>{
    const {error,isValid}=validateRegisterInput(req.body);
    if(!isValid){
        return res.status(400).json(error);
    }

    User.findOne({email:req.body.email})
    .then(user=>{
        if(user){
          return  res.status(400).json({email:"that email is already exists"});
        } 
        else{
            
            const newUser=new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            });
            bcrypt.genSalt(10, (err, salt)=> {
                bcrypt.hash(req.body.password, salt,(err, hash)=> {
                    if(err) throw err;
                    newUser.password=hash;
                    newUser.save()
                    .then(user=>res.json(user))
                    .catch(err=>console.log(err));
                });
            });       
        }
    });
});



let diffDay = 0

router.post('/validCheck',(req,res)=>{
    const {error,isValid}=validateDateInput(req.body);
    if(!isValid){
        return res.status(400).json(error);
    }
    
    if (isNaN(new Date(req.body.dateFrom).getTime())) {  
       return res.status(404).json({dateFrom:"Invalid date (YYYY-MM-DD)"});
      }
      if (isNaN(new Date(req.body.dateTo).getTime())) {  
        return res.status(404).json({dateTo:"Invalid date (YYYY-MM-DD)"});
      }
    let diffTim = new Date(req.body.dateTo).getTime() - new Date(req.body.dateFrom).getTime();

     diffDay = Math.ceil(diffTim / (1000 * 60 * 60 * 24));
     
    if(diffDay<0){
        
        res.status(404).json({dateTo:"To date has to be AFTER From Date"})
    }
    var c=req.body.to;
    
    c=c.toLowerCase();
    c=c.trim();
    if(c=="bangalore"){
        res.status(404).json({to:"To cannot be banglore "})
       
    }
    else{
        
        res.json({clear:"done"});
    }
    
})

router.post('/carSearch',(req,res)=>{
    
    let diffTim = new Date(req.body.dateTo).getTime() - new Date(req.body.dateFrom).getTime();
    let diffDayss = Math.ceil(diffTim / (1000 * 60 * 60 * 24));
    let cost = 0
     cost = cost + (diffDayss*250)
    if(req.body.way==='Multi City'){
         cost = cost + (600*parseInt(req.body.driverpackage))
    }
    else if(req.body.way==='Round Trip'){
         cost = cost + (600 * parseInt(req.body.driverpackage))
    }
    else if(req.body.way==='One Way'){
        cost = cost + (300 * parseInt(req.body.driverpackage))
    }
    res.json({cost:cost+1500})
})




router.post('/login',(req,res)=>{
    const {error,isValid}=validateLoginInput(req.body);
    if(!isValid){
        return res.status(400).json(error);
    }

    const email=req.body.email;
    const password=req.body.password;
    User.findOne({email})
    .then(user=>{
        if(!user){
            return res.status(404).json({email:"email not exists"});
        }
        bcrypt.compare(password,user.password)
        .then(isMatch=>{
            if(isMatch){
                
                // res.json({msg:"success"});
                const payload={id:user.id,name:user.name,avatar:user.avatar};
                jwt.sign(payload,keys.secretOrKey,{expiresIn:360000},
                    (err,token)=>{
                        res.json({
                            success:true,
                            token:'bearer '+token
                        })
                })
            }
            else{
                error.password = 'Password incorrect';
               return res.status(400).json(error);
            }
            
        })
    })
});



module.exports=router;