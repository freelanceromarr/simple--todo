import {  addTodo } from "../todo/actions"

const addTodoThunk = (input)=> async (dispatch, getState)=>{
        const response = await fetch('http://localhost:3000/api/todos', {
            method: 'POST',
            body: JSON.stringify({name: input, completed: false}),
            headers: {
                "content-type": "application/json"
            }
        })
        const todo = await response.json()
        console.log(todo);
        dispatch(addTodo(todo))
}

export default addTodoThunk;