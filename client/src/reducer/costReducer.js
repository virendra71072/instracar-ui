import {COST_USER} from '../actions/types';


const initialStates={
    
    cost:{ }
}

const reducer=(state=initialStates,action)=>{
    switch(action.type){
        case COST_USER:
        return{
            ...state,
            cost:action.payload
        }
        default:
        return state;
    }

}
export default reducer;