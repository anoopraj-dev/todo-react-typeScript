import { useState } from "react"

interface AddTodoProps{
    onSubmit: (title:string) => void;
}


const AddTodo = ({onSubmit}:AddTodoProps) => {
    const [text,setText] = useState('');

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        if(!text.trim()) return;

        onSubmit(text);
        setText('');


    }

  return (
    <form className="flex max-w-lg mx-auto mt-5" onSubmit={handleSubmit}>
  <input onChange={(e)=>setText(e.target.value)}
    type="text"
    placeholder="Add a new task"
    className="border border-blue-200 p-3 rounded-sm grow"
  />
  <button 
    className="rounded-sm bg-blue-500 px-3 text-white font-semibold ms-2 
               hover:bg-transparent hover:text-blue-500 hover:border hover:border-blue-500
               hover:cursor-pointer"
  >
    Add Task
  </button>
</form>

  )
}

export default AddTodo
