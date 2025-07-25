import {DETAIL_USER,GET_ERROR,COST_USER} from './types';
import axios from 'axios';


export const detail=(userData,history)=>dispatch=>{
    axios.post('/api/users/validCheck',userData)
        .then(res => {
            dispatch({
                type:DETAIL_USER,
                payload:userData
                
            })
            return history.push('/select');
        })
        .catch(err => dispatch({
            type:GET_ERROR,
            payload:err.response.data
        }));

}

export const cost=(data,history)=>dispatch=>{
    axios.post('/api/users/carSearch',data)
    .then(res=>{
        dispatch({
            type:COST_USER,
                payload:{
                    data,
                    cost:res.data.cost
                }
        })
        return history.push('/home');
    })
    .catch(err => dispatch({
        type:GET_ERROR,
        payload:err.response.data
    }));
        //  dispatch({
        //     type:COST_USER,
        //         payload:data
        // })
        // history.push('/home');
}