import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import propTypes from 'prop-types';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {registeruser} from '../../actions/authActions';

class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            errors: {}
        }
        this.submitHandler=this.submitHandler.bind(this)
    }
    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    submitHandler(event) {
        event.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        this.props.registeruser(newUser,this.props.history);
       
     
    }
    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/login');
        }
    }
    componentWillReceiveProps(nextProps){
        
        if(nextProps.error){
            this.setState({errors:nextProps.error});
        }
    }
    render() {
        const errors = this.state.errors;
        return (
            <section id="slider-area">
            
            <div class="single-slide-item overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="book-a-car">
                                <form noValidate onSubmit={this.submitHandler}>

                                <div className="pickup-location book-item">
                                <h4>Name:</h4>
                                    <input type="text" className={classnames('form-control form-control-lg', {
                                        'is-invalid': errors.name
                                    })}
                                        placeholder="Name" name="name"
                                        value={this.state.name}
                                        onChange={(event) => this.changeHandler(event)}
                                    />
                                    {errors.name && (
                                        <div className="invalid-feedback">{errors.name}</div>
                                    )}
                                </div>
                                {/* <div class="pickup-location book-item">
                                        <h4>Name:</h4>
                                        <input type="name" class="custom-select" placeholder="Name"/>
                                    </div> */}



                                    {/* <div class="pickup-location book-item">
                                        <h4>Email:</h4>
                                        <input type="email" class="custom-select" placeholder="Email"/>
                                    </div>
                                    <div class="pickup-location book-item">
                                        <h4>Password:</h4>
                                        <input type="password" class="custom-select" placeholder="Password"/>
                                    </div> */}
                                    <div className="pickup-location book-item">
                                    <h4>Email:</h4>
                                    <input type="email" className={classnames('form-control form-control-lg', { 'is-invalid': errors.email })}
                                        placeholder="Email Address" name="email"
                                        value={this.state.email}
                                        onChange={(event) => this.changeHandler(event)} />
                                    {errors.email && (
                                        <div className="invalid-feedback">{errors.email}</div>
                                    )}
                                    {/* <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small> */}
                                </div>
                                <div className="pickup-location book-item">
                                <h4>Password:</h4>
                                    <input type="password" className={classnames('form-control form-control-lg', { 'is-invalid': errors.password })}
                                        placeholder="Password" name="password"
                                        value={this.state.password}
                                        onChange={(event) => this.changeHandler(event)} />
                                    {errors.password && (
                                        <div className="invalid-feedback">{errors.password}</div>
                                    )}
                                </div>
                                   
                                  
    
                                    <div class="book-button text-center">
                                        <button class="book-now-btn">Register</button>
                                    </div><br/>
                                    <p><a href="/login" style={{marginLeft:"150px"}}>Login </a></p>
                                </form>
                            </div>
                        </div>
    
                        <div class="col-lg-7 text-right">
                            <div class="display-table">
                                <div class="display-table-cell">
                                    <div class="slider-right-text">
                                        <h1>BOOK A CAR TODAY!</h1>
                                        <p>FOR AS LOW AS $10 A DAY PLUS 15% DISCOUNT <br/> FOR OUR RETURNING CUSTOMERS</p>
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
register.propTypes={
    registeruser:propTypes.func.isRequired,
    auth:propTypes.object.isRequired,
    error:propTypes.object.isRequired
}
const mapStateToProps=(state)=>({
   auth:state.auth,
   error:state.error
});


export default connect(mapStateToProps,{registeruser})(withRouter(register));

