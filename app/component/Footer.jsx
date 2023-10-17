import { useSelector } from "react-redux";
function IncompleteTasksCount(todos){
    const tasks = todos && todos.filter(todo=>!todo.completed)
    switch (tasks.length) {
        case 0:
            return 'No task '
        case 1:
            return tasks.length + ` task`
        default:
            return tasks.length + ' tasks';
    }
}
const Footer =()=>{
    const todos = useSelector(state=>state.todos);
    const filters = useSelector(state=>state.filters);
    console.log(filters);
   


    return (
    
        <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p> {IncompleteTasksCount(todos)} left</p>
        <ul className="flex space-x-1 items-center text-xs">
            <li 
                // onClick={statusHandler()}
                className="cursor-pointer font-bold"
            >All
            </li>
            <li>|</li>
            <li className="cursor-pointer">Incomplete</li>
            <li>|</li>
            <li className="cursor-pointer">Complete</li>
            <li></li>
            <li></li>
            <li
                className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"
            ></li>
            <li
                className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"
            ></li>
            <li
                className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"
            ></li>
        </ul>
    </div>
    )
}

export default Footer;