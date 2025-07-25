import React, { Component } from 'react';
import {logoutUser} from '../../actions/authActions';
import propTypes from 'prop-types';
import {connect} from 'react-redux';

 class Navbar extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        
        this.props.logoutUser();
      }
    render() {
        const {isAuthenticated}=this.props.auth;
        const authLinks=(
            <li><a href="/"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
            >Logout</a></li>
          );
          const guestLinks=(
            <li><a href="/login">Login</a></li>
          );

        return (
            <div>
                 <div className="preloader">
        <div className="preloader-spinner">
            <div className="loader-content">
                <img src="assets/img/preloader.gif" alt="JSOFT"/>
          </div>
        </div>
    </div>
    <header id="header-area" className="fixed-top">

        <div id="header-top" className="d-none d-xl-block">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-3 text-left">
                        <i className="fa fa-map-marker"></i> 80/8, Rajasthan
                    </div>
                  
                    <div className="col-lg-3 text-center">
                        <i className="fa fa-mobile"></i> +1 800 888 888
                    </div>
                    
                    <div className="col-lg-3 text-center">
                        <i className="fa fa-clock-o"></i> Mon-Fri 09.00 AM - 7.00 PM
                    </div>
                  
                    <div className="col-lg-3 text-right">
                        <div className="header-social-icons">
                            <a href="/"><i className="fa fa-behance"></i></a>
                            <a href="/"><i className="fa fa-pinterest"></i></a>
                            <a href="/"><i className="fa fa-facebook"></i></a>
                            <a href="/"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
               
                </div>
            </div>
        </div>
      
        <div id="header-bottom">
            <div className="container">
                <div className="row">
                   
                    <div className="col-lg-4">
                        <a href="/" className="logo">
                            <img src="assets/img/logo.png"  alt="JSOFT"/>
                        </a>
                    </div>
                 
                    <div className="col-lg-8 d-none d-xl-block">
                        <nav className="mainmenu alignright">
                            <ul>
                                <li className="active"><a href="/">Home</a>
                                    
                                </li>
                                
                                
                                
                                {isAuthenticated?authLinks:guestLinks}
                            </ul>
                        </nav>
                    </div>
                  
                </div>
            </div>
        </div>
        
    </header>
    
            </div>
        )
    }
}


Navbar.propTypes={
    logoutUser:propTypes.func.isRequired,
    auth:propTypes.object.isRequired
   
  }
  const mapStateToProps=(state)=>({
   auth:state.auth
  });
  
  
  export default connect(mapStateToProps,{logoutUser})(Navbar);