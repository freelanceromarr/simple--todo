
import todoreducer from "./todo/reducer";
import filterReducer from "./filter/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todos: todoreducer,
    filters: filterReducer,
})


export default rootReducer;