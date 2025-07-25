const validator = require('validator');
const isEmpty =require('./isEmpty') ;

module.exports=function validateDateInput(data){
    let error={};
   
    data.dateFrom=!isEmpty(data.dateFrom) ?data.dateFrom :'';
    data.dateTo=!isEmpty(data.dateTo) ?data.dateTo:'';
    data.to=!isEmpty(data.to) ?data.to:'';
  
  
    
   
    if(validator.isEmpty(data.dateFrom)){
      error.dateFrom="cannot be empty"; 
    }

  
    if(validator.isEmpty(data.dateTo)){
      error.dateTo="cannot be empty"; 
    }
    if(validator.isEmpty(data.to)){
        error.to="cannot be empty"; 
      }
  
  
  
    return{
      error,
        isValid:isEmpty(error)
    }
        
    
  }