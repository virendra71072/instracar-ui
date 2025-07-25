import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './component/layout/navbar';
import Dashboard from './component/layout/dashboard';
import Footer from './component/layout/footbar';
import Content from './component/content';
import Home from './component/booking/home';
import Book3 from './component/booking/book3';
import Login from './component/auth/login';
import End from './component/auth/end';
import Register from './component/auth/register';
import PrivateRoute from './component/comman/privateRoute';

function App() {
  return (
   
      <Router>
      <Navbar/>
 
       <Route exact path="/" component={Dashboard}/>
       <PrivateRoute exact path="/home" component={Home}/>
    
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <PrivateRoute exact path="/end" component={End}/>
      <PrivateRoute exact path="/select" component={Book3}/>
      <Content/>
      <Footer/>
      </Router>
   
  );
}

export default App;
