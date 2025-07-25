import React, { Component } from 'react';
import {withRouter,Redirect} from 'react-router-dom';
import propTypes from 'prop-types';


import {connect} from 'react-redux';

 class home extends Component {
     constructor(props){
        super(props);
        this.state={
            details:true,
            othercity:true
        }
     }
    
    componentWillMount(){
        console.log("hh");
        const {cost}=this.props.cost;
        function isEmpty(obj) {
            for(var key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
        if(isEmpty(cost)) {
           
           this.setState({details:false});
        } else {
            // Object is NOT empty
        }
    }
     
    render() {

        let costs,pay;
        var d="";
        var city="";
        if(this.state.details){

            
            costs=this.props.cost.cost.data;
         pay=this.props.cost.cost.cost;
        
        if(costs.first!=""){
            city=<div>
                <label>Other Cities :{costs.first}, {costs.second}</label>
            </div>
        }
        else{
            city="";
        }
            d="";
        }
        else{
            costs="";
            pay="";
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
                        <form action="/end">
                            <label>From: Bangalore</label><br/>
                            <label>To: {costs.to}</label><br/>
                            <label>Driver Package: Rs.{costs.driverpackage}/km</label><br/>
                            <label>language: {costs.language}</label><br/>
                            <label>car: {costs.car}</label><br/>
                            <label>way: {costs.way}</label><br/>
                            <label>dateFrom: {costs.dateFrom}</label><br/>
                            <label>dateTo: {costs.dateTo}</label><br/>
                           {city}<br/>
                           <b><h2>Payment: Rs {pay}</h2></b><br/>
                           <div class="bookcar-btn bookinput-item">
                                            <button type="submit" >Procced to payment!</button>
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

home.propTypes={
    cost:propTypes.func.isRequired,
    detail:propTypes.func.isRequired,
    error:propTypes.object.isRequired
}
const mapStateToProps=(state)=>({
    cost:state.cost,
    detail:state.detail,
   error:state.error
});

export default connect(mapStateToProps,{})(withRouter(home));
