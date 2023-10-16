import { TODODELETED, TODODELETED, SETPRIORITY, CLEARALLTODO, COMPLETEALLTODO, TODOSTATUS, TODOADDED } from "./actionTypes";



export const addTodo = (todos) =>{
    return {
        type: TODOADDED,
        payload: todos
    }
}

export const deleteTodo = (todoId) =>{
    return {
        type: TODODELETED,
        payload: todoId
    }
}

export const todoStatus = (todoId) =>{
    return {
        type: TODOSTATUS,
        payload: todoId
    }
}

export const priorityToggle = (todoId, color) =>{
    return {
        type: SETPRIORITY,
        payload: {
            todoId, 
            color
        }
    }
}

export const completeAllTodo = () =>{
    return {
        type: COMPLETEALLTODO
        
    }
}

export const clearAllTodo = () =>{
    return {
        type: CLEARALLTODO,
       
    }
}