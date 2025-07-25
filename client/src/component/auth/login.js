import React, { Component } from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { loginUser} from '../../actions/authActions';


 class login extends Component {
    constructor(props){
        super(props);
        this.state={
            
            email:'',
            password:'',
            reload:false,
            errors:{}
        }
    }
    changeHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault();
        const userData={
            email:this.state.email,
            password:this.state.password           
        }
        this.props.loginUser(userData);
    }
    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/');
            
        }
    }
    componentWillReceiveProps(nextProps){
        
        
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
        if(nextProps.auth.isAuthenticated){
           this.setState({reload:true})
             //this.props.history.push('/');
           
            
         }
       
    }
  
    render() {
        const errors = this.state.errors;
        let rel,rel1;
        if(this.state.reload){
            rel=<div className="book-button text-center" style={{marginTop:"200px"}}>
                <h1>Congractulation You are logged In...!</h1>
                <a href="/"><button  class="book-now-btn">Continue...</button></a>
            </div>;
           

        }else{
            rel= <h1>BOOK A CAR TODAY!</h1>
            rel1=<div class="col-lg-5">
            <div class="book-a-car">
                <form onSubmit={(e)=>this.submitHandler(e)}>
                                   
            <div className="pickup-location book-item">
            <h4>Email:</h4>
                <input type="email" className={classnames('form-control form-control-lg', { 'is-invalid': errors.email })} 
                placeholder="Email Address" name="email"
                value={this.state.email}
                onChange={(event)=>this.changeHandler(event)} />
                {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                )}
            </div>
                {/* <div class="pickup-location book-item">
                    <h4>Email:</h4>
                    <input type="email" class="custom-select" placeholder="Email"/>
                </div> */}
                {/* <div class="pickup-location book-item">
                    <h4>Password:</h4>
                    <input type="password" class="custom-select" placeholder="Password"/>
                </div> */}
                <div className="pickup-location book-item">
                <h4>Password:</h4>
                <input type="password" className={classnames('form-control form-control-lg', { 'is-invalid': errors.password })} 
                placeholder="Password" name="password" 
                value={this.state.password}
                onChange={(event)=>this.changeHandler(event)}/>
                {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                )}
            </div>
                
               
              

                <div class="book-button text-center">
                    <button class="book-now-btn">Login</button>
                </div><br/>
                <p><a href="/register" style={{marginLeft:"110px"}}>New User/Register </a></p>
            </form>
            </div>
                        </div>
        }
        return (
            <section id="slider-area">
            
            <div class="single-slide-item overlay">
                <div class="container">
                    <div class="row">
                        


                                

                                            {rel1}


                           
    
                        <div class="col-lg-7 text-right">
                            <div class="display-table">
                                <div class="display-table-cell">
                                    <div class="slider-right-text">
                                        {rel}

                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        )
    }
}

login.propTypes={
    loginUser:propTypes.func.isRequired,
    auth:propTypes.object.isRequired,
    errors:propTypes.object.isRequired
}
const mapStateToProps=(state)=>({
   auth:state.auth,
   errors:state.error
});

export default connect(mapStateToProps,{loginUser})(withRouter(login));