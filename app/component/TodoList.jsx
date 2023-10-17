import CancelImage from '@/public/images/cancel.png'
import { useDispatch } from 'react-redux';
import { deleteTodo, priorityToggle, todoStatus } from '../redux/todo/actions';
const TodoList = ({todo})=>{
    const dispatch = useDispatch()
    const toggleHanlder= (todoId)=>{
        dispatch(todoStatus(todoId))
    }

    const todoPriorityHandler = (todId, color)=>{
        dispatch(priorityToggle(todId, color))
    }
    const todoDeleteHandler = (todId)=>{
        dispatch(deleteTodo(todId))
    }
    return (
    
         <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
                        
                <div
                                className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
                            >
                                <div
                                    className="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500"
                                >
                                    <input
                                        onChange={()=> toggleHanlder(todo.id)}
                                        type="checkbox"
                                        className="opacity-0 absolute rounded-full"
                                    />
                                    <svg
                                        className={`${!todo.completed && 'hidden'} fill-current w-3 h-3 text-green-500 pointer-events-none`}
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                    </svg>
                                </div>

                                <div className={`select-none flex-1 ${todo.completed && "line-through"}`}>
                                    { todo.name}
                                </div>

                                <div
                                    onClick={()=>todoPriorityHandler(todo.id, 'green')}
                                    className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${todo.color=="green" && "bg-green-500"}`}
                                ></div>

                                <div
                                    onClick={()=>todoPriorityHandler(todo.id, 'yellow')}
                                    className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${todo.color=="yellow" && "bg-yellow-500"}`}
                                ></div>

                                <div
                                    onClick={()=>todoPriorityHandler(todo.id, 'red')}
                                    className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${todo.color=="red" && "bg-red-500"}`}
                                ></div>

                                <img
                                    onClick={()=>todoDeleteHandler(todo.id)}
                                    src="/images/cancel.png"  
                                    className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                                    alt="Cancel"
                                />
                            </div>

                        
                 </div>
               
    )
}

export default TodoList;