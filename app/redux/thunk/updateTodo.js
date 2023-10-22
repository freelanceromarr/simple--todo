import {  addTodo, todoStatus } from "../todo/actions"

const updateTodo = (todoId, currentStatus)=> async (dispatch, getState)=>{
        const response = await fetch(`http://localhost:3000/api/todos/${todoId}`, {
            method: 'PUT',
            body: JSON.stringify({completed: !currentStatus}),
            headers: {
                "content-type": "application/json"
            }
        })
        const todo = await response.json()
        console.log({update: todo});
        dispatch(todoStatus(todo._id))
}

export default updateTodo;