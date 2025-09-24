import type { Todo } from "../types/todos";

interface TodoItemProps {
    todo:Todo;
    completedChange: (id:number, isCompleted:boolean)=> void;
}


const TodoItems = ({todo,completedChange}: TodoItemProps) => {
 
    return (
        <div>
            <label className="flex items-cneter gap-2 rounded-sm p-2 border-1 border-blue-200">
                <input type="checkbox" 
                checked={todo.isCompleted}

                onChange={(e)=>completedChange(todo.id,e.target.checked)}
                />
                <span className={todo.isCompleted?"line-through text-gray-500 px-4":'px-4'}>
                    {todo.title}
                </span>
            </label>
        </div>
    )
}

export default TodoItems;