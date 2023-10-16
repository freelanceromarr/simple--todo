import {applyMiddleware, createStore} from 'redux'
import todoreducer from './reducer'
import loggger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
const store = createStore(
    todoreducer, 
    composeWithDevTools(applyMiddleware(loggger))
    )

    export default store;