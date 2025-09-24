import { useState } from "react";
import TodoItems from "./components/Todoitems";
import { dummyDate } from "./data/todos";

function App() {

  const [todos,setTodos] = useState(dummyDate);

  const handleTodo = (id:number,isCompleted:boolean) =>{
    setTodos((prev=>prev.map(todo=>(todo.id===id?{...todo,isCompleted}:todo)) ))

  }

  return (
    <main className="py-10 h-screen ">
      <h1 className="font-bold text-center text-4xl">Task Manager</h1>
      <div className="max-w-lg mx-auto py-5">


        <div className="text-2xl">
          {
            todos.map(todo => (
             <TodoItems key={todo.id} todo= {todo} completedChange= {handleTodo}/>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default App;