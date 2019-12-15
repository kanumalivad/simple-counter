import {INCREMENT, DECREMENT} from '../actions/actions';

const intialCount = {
    count : 0
}

function rootReducer(state = intialCount, actions) {
    switch(actions.type) {

        case INCREMENT :
            return {
                count : state.count + 1
            }
        
        case DECREMENT : 
            return {
                count : state.count - 1
            }
        default : 
            return state;
    }
}

export default rootReducer;