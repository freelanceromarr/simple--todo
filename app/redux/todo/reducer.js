import {  TODODELETED, SETPRIORITY, CLEARALLTODO, COMPLETEALLTODO, TODOSTATUS, TODOADDED, TODOLOADED } from "./actionTypes";
import initialState from "./initialState";

const maxId = function (todos) {
       const todoId=  todos.reduce(function(maxId, todo){
            return Math.max(todo.id, maxId);
        }, 0)

        return todoId+1;
}




const todoreducer = (state= initialState, action)=>{
    switch (action.type) {
        case TODOADDED:
            return [
                ...state,
               action.payload
            ]
        case TODOLOADED:
            return action.payload
        case TODOSTATUS :
            return state.map( (todo) => {
                if(todo._id !==action.payload) {
                    return todo
                }
                
               return todo.completed ? {...todo, completed: false} : {...todo, completed: true}
            })
        case SETPRIORITY:
                return state.map( (todo) =>{
                    const {todoId, color} = action.payload;
                    if (todo._id == todoId) {
                        switch (color) {
                            case "green":
                                return {...todo, color:color}
                            case "yellow":
                                    return {...todo, color: color}
                            case "red":
                                    return {...todo, color: color}
                            default:
                               return todo
                        }
                    }return todo;
                })
        case TODODELETED:
            return state.filter((todo)=> todo._id !== action.payload)
        
        case COMPLETEALLTODO :
                return state.map((todo)=> {
                    return {...todo, completed: true}              
                })
        case CLEARALLTODO :
                return state.map((todo)=> {
                    return {...todo, completed: false}              
                })
    
        default: 
            return state;
    }
}

export default todoreducer;