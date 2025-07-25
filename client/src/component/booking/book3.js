import React, { Component } from 'react';
import {withRouter,Redirect} from 'react-router-dom';
import propTypes from 'prop-types';

import {cost} from '../../actions/detail';
import {connect} from 'react-redux';

class book3 extends Component {
    constructor(props){
        super(props);
        this.state={
            first:"",
            second:"",
            driverpackage:"15",
            language:"English",
            car:"Audi",
            details:true,
        }
    }
   
    changeHandler = (event) => {
  
        this.setState({ [event.target.name]: event.target.value })
    }
    submitHandler=(event) =>{
        const {detail}=this.props.detail;
     
       event.preventDefault();
       
       const driverDetails = {
        first: this.state.first,
        second: this.state.second,
        driverpackage: this.state.driverpackage,
        language: this.state.language,
        car: this.state.car,
       ...detail
      }
      
      this.props.cost(driverDetails,this.props.history);
       // this.props.registeruser(newUser,this.props.history);
        //this.props.detail(Detail,this.props.history);
      
    
    }

    componentDidMount(){
        const {detail}=this.props.detail;
        function isEmpty(obj) {
            for(var key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
        if(isEmpty(detail)) {
            
           this.setState({details:false});
        } else {
            // Object is NOT empty
        }
    }
    render() {
        const {detail}=this.props.detail;
        let check;
        if(detail.way=="Multi City"){
            check=<div>
                <div class="pick-location bookinput-item">
            <input type="text" style={{color:"black"}} name="first" className='form-control form-control-lg' placeholder="Add first city"
                 value={this.state.first}
                 onChange={(event) => this.changeHandler(event)}
                 />
               
                 </div>
                 <div class="pick-location bookinput-item">
            <input type="text" style={{color:"black"}} name="second" className='form-control form-control-lg' placeholder="Add second city"
                 value={this.state.second}
                 onChange={(event) => this.changeHandler(event)}
                 />
                 
                 </div>
            </div>
        }
        else{
            check=""
        }
        var d;
        if(this.state.details){
            d="";
        }
        else{
            d=<Redirect to="/"/>
        }
        return (
            <div>
                {d}
            <section id="home-slider-area">
            <div class="home-slider-item slider-bg-1 overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="slideshowcontent">
                                <h1>BOOK A CAR TODAY!</h1>
                                <p>FOR AS LOW AS $10 A DAY PLUS 15% DISCOUNT <br/> FOR OUR RETURNING CUSTOMERS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="home-slider-item slider-bg-2 overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="slideshowcontent">
                                <h1>SAVE YOUR MONEY</h1>
                                <p>FOR AS LOW AS $10 A DAY PLUS 15% DISCOUNT <br/> FOR OUR RETURNING CUSTOMERS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="home-slider-item slider-bg-3 overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="slideshowcontent">
                                <h1>ENJOY YOUR JOURNEY</h1>
                                <p>FOR AS LOW AS $10 A DAY PLUS 15% DISCOUNT <br/> FOR OUR RETURNING CUSTOMERS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <div id="book-a-car">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="booka-car-content">
                        <form  onSubmit={(e)=>this.submitHandler(e)}>
                                    <div class="pick-location bookinput-item">
                                            <select class="custom-select" name="driverpackage"
                                            value={this.state.driverpackage}
                                            onChange={(event) => this.changeHandler(event)} 
                                            >
                                              
                                              <option selected value="15" defaultValue>Rs.15/km (Normal)</option>
                                   <option value="18">Rs.18/km (White dressed)</option>
                            <option value="25">Rs.25/km (White dressed, chaffeaur etiquettes)</option>
                                            </select>
                                        </div>

                                        <div class="car-choose bookinput-item">
                                            <select class="custom-select" name="language"
                                            value={this.state.language}
                                            onChange={(event) => this.changeHandler(event)} 
                                            
                                            >
                                            <option selected value="English">English</option>
                                            <option value="Hindi">Hindi</option>
                                            <option value="Kannada">Kannada</option>
                                            </select>
                                        </div>
                                        <div class="car-choose bookinput-item">
                                            <select class="custom-select" name="car"
                                            value={this.state.car}
                                            onChange={(event) => this.changeHandler(event)} 
                                            >
                                            <option selected value="Audi">Audi</option>
                                            <option value="BMW">BMW</option>
                                            <option value="Merecedes">Merecedes</option>
                                            <option value="Non-luxury">Non-luxury</option>
                                            </select>
                                        </div>
                                            {check}
                                        <div class="bookcar-btn bookinput-item">
                                            <button type="submit">Book Car</button>
                                        </div>
                                    </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div> 
        )
    }
}

book3.propTypes={
    cost:propTypes.func.isRequired,
    detail:propTypes.func.isRequired,
    error:propTypes.object.isRequired
}
const mapStateToProps=(state)=>({
    cost:state.cost,
   detail:state.detail,
   error:state.error
});

export default connect(mapStateToProps,{cost})(withRouter(book3));
