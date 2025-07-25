import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser , logoutUser} from './actions/authActions';

if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken);
    const decode =jwt_decode(localStorage.jwtToken);
  
    store.dispatch(setCurrentUser(decode));
  
    const currentTime = Date.now() / 1000;
    if (decode.exp < currentTime) {
   
      store.dispatch(logoutUser());
     
      window.location.href = '/login';
    }
  }

ReactDOM.render(<Provider  store={store} ><BrowserRouter>
    <App/>
  </BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
