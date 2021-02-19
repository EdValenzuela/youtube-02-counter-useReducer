import { INCREMENT, DECREMENT, RESET } from '../types';

const reducer = (state, action) =>{
    switch (action.type) {
        case INCREMENT:
            return {
                
                count: state.count + 1
            }
        
        case DECREMENT:
            return {
                count: state.count - 1
            }
        
        case RESET:
            return {
                count: action.payload
            }
    
        default:
            return state;
    }
}

export default reducer;