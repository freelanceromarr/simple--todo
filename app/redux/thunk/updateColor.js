import {  priorityToggle } from "../todo/actions"

const updateColor = (todoId, color)=> {
    return async (dispatch, getState)=>{
        const response = await fetch(`http://localhost:3000/api/todos/${todoId}`, {
            method: 'PUT',
            body: JSON.stringify({color: color}),
            headers: {
                "content-type": "application/json"
            }
        })
        const todo = await response.json()
        console.log({clolor: todo});
        dispatch(priorityToggle(todo._id, todo.color))
}
}

export default updateColor;