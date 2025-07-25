import axios from 'axios'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../utils/setAuthToken'

import {SET_CURRENT_USER,GET_ERROR} from './types'

export const registeruser=(userData,history)=>dispatch=>{
    
    axios.post('/api/users/register',userData)
        .then(res => history.push('/login'))
        .catch(err => dispatch({
            type:GET_ERROR,
            payload:err.response.data
        }))
}
// export const custLogin = (userData) => dispatch => {
//  axios.post('http://localhost:5000/api/users/login',userData)
//  .then(res=>{
//     const { token } = res.data
//     const { userName } = res.data
//     const { userEmail } = res.data
//     localStorage.setItem('loginJwt',token)
//     localStorage.setItem('sessionUser',userName)
//     localStorage.setItem('sessionEmail',userEmail)
//     setAuthToken(token)
//     const decoded = jwt_decode(token)
//     dispatch(setCurrentUser(decoded))

//  })
//  .catch(err=>{
//      console.log(err)
//      dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//     })
//  })
// };

export const loginUser=(userData)=>dispatch=>{
    axios.post('/api/users/login',userData)
    .then(res=>{
        const {token}=res.data;
        localStorage.setItem('jwtToken',token);

        setAuthToken(token);
        const decode =jwt_decode(token);
        
        dispatch(setCurrentUser(decode));

    }).catch(err=>dispatch({
        type:GET_ERROR,
        payload:err.response.data
    }))
}


export const setCurrentUser = decoded =>{
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser=()=>dispatch=>{
    localStorage.removeItem('jwtToken');

    setAuthToken(false);
    dispatch(setCurrentUser({}));
}