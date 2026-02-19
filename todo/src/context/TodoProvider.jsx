import { TodoContext } from "./TodoContext"
import { useState } from "react"
export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

   const addTodo=(text)=>{
    const newTodo={
        id:Date.now(),
        text,
        completed:false,
    }
    setTodos(prev=>[...prev, newTodo]);
   }

const updateTodo = (id, updatedText) => {
  setTodos(prev =>
    prev.map(todo =>
      todo.id === id
        ? { ...todo, text: updatedText }
        : todo
    )
  );
};


   const deleteTodo=(id)=>{
    setTodos(prev=>prev.filter((todo)=>todo.id!==id));
   }


const toggleComplete = (id) => {
  setTodos(prev =>
    prev.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
};


    return(
        <TodoContext.Provider value={{todos,setTodos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
            {children}
        </TodoContext.Provider>
    )
}