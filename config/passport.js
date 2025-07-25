const JwtStrategy=require('passport-jwt').Strategy;

const ExtractJwt=require('passport-jwt').ExtractJwt;
const Users=require('../models/users');
const keys=require('./keys');

const opts={};
opts.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();

opts.secretOrKey=keys.secretOrKey;

module.exports=passports=>{
    passports.use(new JwtStrategy(opts,(jwt_payload,done)=>{
        Users.findById(jwt_payload.id)
        .then(user=>{
            if(user){
                return done(null,user);
            }
            else{
                return done(null,false);
            }
        }).catch(err=>console.log(err)); 
   }));
}


