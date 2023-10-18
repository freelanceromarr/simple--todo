import { useDispatch, useSelector } from "react-redux";
import { filterByColor, filterByStatus } from "../redux/filter/actoins";

// incompelte todo count
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
    const dispatch = useDispatch()
    
    console.log(filters);
   
    const statusHandler = (status)=>{
        dispatch(filterByStatus(status))
    }
    const colorStatusHandler = (color)=>{
        const {colorstatus}= filters
        if (colorstatus.colors.includes(color)){ 
            dispatch(filterByColor("remove", color))
            
        }
        else {
            dispatch(filterByColor('add', color))
        }
        }
    


    return (
    
        <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p> {IncompleteTasksCount(todos)} left</p>
        <ul className="flex space-x-1 items-center text-xs">
            <li 
                onClick={()=>statusHandler('all')}
                className={`cursor-pointer ${filters.status == 'all' && 'font-bold'}`} 
            >All
            </li>
            <li>|</li>
            <li onClick={()=>statusHandler('incomplete')} 
            className={`cursor-pointer ${filters.status == 'incomplete' && 'font-bold'}`}>Incomplete</li>
            <li>|</li>
            <li onClick={()=>statusHandler('complete')} 
            className={`cursor-pointer ${filters.status ==  'complete' && 'font-bold'}`}>Complete</li>
            <li></li>
            <li></li>
            <li
                onClick={()=>colorStatusHandler('green')} 
                className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${filters.colorstatus.colors.includes('green') && "bg-green-500"}`} 
            ></li>
            <li
                onClick={()=>colorStatusHandler('red')} 
                className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${filters.colorstatus.colors.includes('red') && "bg-red-500"}`}
            ></li>
            <li
                onClick={()=>colorStatusHandler('yellow')} 
                className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${filters.colorstatus.colors.includes('yellow') && "bg-yellow-500"} `}
            ></li>
        </ul>
    </div>
    )
}

export default Footer;