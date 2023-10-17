import {applyMiddleware, createStore} from 'redux'
import loggger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "./rooteReducer";

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(loggger))
    )

export default store;