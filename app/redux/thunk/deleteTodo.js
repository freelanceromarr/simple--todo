import { deleteTodo } from "../todo/actions"

const deleleTodothunk = (todoId)=> async (dispatch, getState)=>{
        await fetch(`http://localhost:3000/api/todos/${todoId}`, {
            method: 'DELETE',
            
        })
        dispatch(deleteTodo(todoId))
}

export default deleleTodothunk;