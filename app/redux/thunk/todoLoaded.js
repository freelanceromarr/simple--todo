import { loadTodo } from "../todo/actions"

const todoLoaded = async (dispatch)=>{
        const response = await fetch('http://localhost:3000/api/todos')
        const todos = await response.json()
        dispatch(loadTodo(todos))
}

export default todoLoaded;