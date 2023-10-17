
import { STATUSFILTER, COLORFILTER } from "./actionTypes"


const initialState = {
    status: '',
    colorstatus: {
        type: "",
        colors: []
    }
}
const filterReducer = (state= initialState, action)=>{

    switch (action.type) {
        case STATUSFILTER:
            return {
                ...state,
                status: action.payload
            }
        case COLORFILTER:
               const {changeType, color} = action.payload;
                return {
                    ...state,
                    colorstatus: {...state.colorstatus, type: changeType, colors: [...state.colorstatus.colors, color]}
                }
        
        default:
            return state;
    }

}

export default filterReducer;