
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
               if (changeType=== 'add') {
                return {
                    ...state,
                    colorstatus: {...state.colorstatus, type: changeType, colors: [...state.colorstatus.colors, color]}
                }
               }else if (changeType=== 'remove'){
                
                return {
                    ...state,
                    colorstatus: {...state.colorstatus, type: changeType, colors: state.colorstatus.colors.filter(ele=>ele !== color)}
                }
               } else{return state}
               
        
        default:
            return state;
    }

}

export default filterReducer;