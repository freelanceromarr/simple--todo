import {  TODODELETED, SETPRIORITY, CLEARALLTODO, COMPLETEALLTODO, TODOSTATUS, TODOADDED } from "./actionTypes";
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
                {id: maxId(state), name: action.payload, completed: false}
            ]
        case TODOSTATUS :
            return state.map( (todo) => {
                if(todo.id !==action.payload) {
                    return todo
                }
                
               return todo.completed ? {...todo, completed: false} : {...todo, completed: true}
            })
        case SETPRIORITY:
                return state.map( (todo) =>{
                    const {todoId, color} = action.payload;
                    if (todo.id == todoId) {
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
            return state.filter((todo)=> todo.id !== action.payload)
        
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