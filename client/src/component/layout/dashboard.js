import React, { Component } from 'react';
import {detail} from './../../actions/detail';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";
import propTypes from 'prop-types';


class dashboard extends Component {
  constructor(props){
    super(props);
    this.state={
        from:"Banglore",
        to:"",
        way:"One Way",
        dateFrom:"",
        dateTo:"",
        errors:{}
    }
    this.handleFromDateChange = this.handleFromDateChange.bind(this);
    this.handleToDateChange = this.handleToDateChange.bind(this);
  }
  changeHandler = (event) => {
  
    this.setState({ [event.target.name]: event.target.value })
}
componentWillReceiveProps(nextProps){
        
        
    if(nextProps.errors){
        this.setState({errors:nextProps.errors});
    }
   
   
}
handleFromDateChange(date) {
   
    this.setState({
        dateFrom: date
    });
  }
  handleToDateChange(date) {
    this.setState({
        toDate: date
    });
}
submitHandler=(event) =>{
   
    // console.log("hello");
   event.preventDefault();
   const Detail = {
       from:this.state.from,
     to: this.state.to,
     way:this.state.way,
     dateFrom: this.state.dateFrom,
     dateTo: this.state.dateTo,
   }
 
   // this.props.registeruser(newUser,this.props.history);
    this.props.detail(Detail,this.props.history);
  

}
    render() {
        const errors = this.state.errors;
        
        return (
            <div>
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
                    <h2>From: <b>BANGALORE</b> </h2>
                            <form action="/select" onSubmit={(e)=>this.submitHandler(e)}>
                           
                            <div class="pick-location bookinput-item">
                            <input type="text" style={{color:"black"}} name="to" className='form-control form-control-lg' placeholder="To"
                                 value={this.state.to}
                                 onChange={(event) => this.changeHandler(event)}
                                 />{errors.to}
                                 
                                 </div>
                           
                            <div className="pick-location bookinput-item">
                                <select className="custom-select" name="way"
                                value={this.state.way}
                                onChange={(event) => this.changeHandler(event)} 
                                >
                                  <option selected value="One Way" defaultValue>One Way</option>
                                  <option value="Round Trip">Round Trip</option>
                                  <option value="Multi City">Multi City</option>
                                  <option value="Airport Package">Airport Package</option>
                                  
                                </select>
                            </div>

                            <div className="pick-date bookinput-item">
                                
                                <input type="text" style={{color:"black"}} name="dateFrom" className='form-control form-control-lg' placeholder="yyyy-mm-dd"
                                 value={this.state.dateFrom}
                                 onChange={(event) => this.changeHandler(event)}
                                 />{errors.dateFrom}
                      
                              
                            </div>

                            <div className="retern-date bookinput-item">
                                {/* <input id="endDate2" placeholder="Return Date" name="dateTo"
                                value={this.state.dateTo}
                                onChange={this.handleToDateChange}
                                /> */}
                                <input type="text" style={{color:"black"}} name="dateTo" className='form-control form-control-lg' placeholder="yyyy-mm-dd"
                                 value={this.state.dateTo}
                                 onChange={(event) => this.changeHandler(event)}
                                 />{errors.dateTo}
                                                            {/* <DatePicker className='form-control form-control-lg'
                                    selected={this.state.dateTo}
                                    onChange={this.handleToDateChange}
                                    value={this.state.dateTo}
                                    required
                                /> */}
                            </div>


                            <div className="bookcar-btn bookinput-item" >
                            <button type="submit" >Book Car</button>
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
dashboard.propTypes={
    detail:propTypes.func.isRequired,
    errors:propTypes.object.isRequired
}

const mapStateToProps=state=>({
    detail:state.detail,
    errors:state.error
  })


export default connect(mapStateToProps,{detail})(withRouter(dashboard));


