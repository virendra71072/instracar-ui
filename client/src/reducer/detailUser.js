import {DETAIL_USER} from '../actions/types';


const initialStates={
    
    detail:{ }
}

const reducer=(state=initialStates,action)=>{
    switch(action.type){
        case DETAIL_USER:
        return{
            ...state,
            detail:action.payload
        }
        default:
        return state;
    }

}
export default reducer;