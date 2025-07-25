import {combineReducers} from 'redux';
import detailReducer from './detailUser';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import costReducer from './costReducer';




export default combineReducers({
    detail:detailReducer,
    auth:authReducer,
    error:errorReducer,
    cost:costReducer
});