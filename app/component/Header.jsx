import { useDispatch, useSelector } from "react-redux";
import TodoList from "./TodoList";
import { useEffect, useState } from "react";
import { addTodo, clearAllTodo, completeAllTodo } from "../redux/todo/actions";
import todoLoaded from "../redux/thunk/todoLoaded";
import addTodoThunk from "../redux/thunk/addTodo";



const Header =()=>{
    const todos = useSelector(state=>state.todos)
    const filters = useSelector(state=>state.filters)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    console.log(todos);
    useEffect(()=>{
        dispatch(todoLoaded)
    },[dispatch])

    const addTodoHandler = (e)=>{
        e.preventDefault(); 
        dispatch(addTodoThunk(input))
        setInput("")
    }

    const completeAll = ()=>{
        dispatch(completeAllTodo())
    }

    const clearAll = ()=>{
        dispatch(clearAllTodo())
    }

    return (
        <div>
                    <form
                        onSubmit={addTodoHandler}
                        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                    >
                        <img
                            src="/images/notes.png"
                            className="w-6 h-6"
                            alt="Add todo"
                        />
                        <input
                            type="text"
                            onChange={(e)=> setInput(e.target.value)}
                            value={input}
                            placeholder="Type your todo"
                            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                        />
                        <button
                            type="submit"
                            className="appearance-none w-8 h-8 bg-[url(/images/plus.png)] bg-no-repeat bg-contain"
                        ></button>
                    </form>

                    <ul className="flex justify-between my-4 text-xs text-gray-500">
                        <li 
                            onClick={completeAll}
                            className="flex space-x-1 cursor-pointer">
                            <img
                                className="w-4 h-4"
                                src="/images/double-tick.png"
                                alt="Complete"
                            />
                            <span>Complete All Tasks</span>
                        </li>
                        <li onClick={clearAll} className="cursor-pointer">Clear completed</li>
                    </ul>
                    {
                        
                        todos.filter(todo=>{
                            switch (filters.status) {
                                case 'complete':
                                    return todo.completed
                                case 'incomplete':
                                    return !todo.completed
                                default:
                                    return todo;
                            }
                        }).filter(todo => {
                            const {colors} = filters.colorstatus;
                            if (colors.length > 0) {
                                return colors.includes(todo?.color)
                            }else return true
                        })
                        .map((todo)=>{
                            return  <TodoList key={todo._id} todo={todo}/>
                        })
                    }
                </div>
    )
}

export default Header;