"use client"

import { useTodos } from "@/store/todos"
import { useSearchParams } from "next/navigation";

const Todos = () => {

    const { todos, handleTodoDelete, toggleTodosAsCompleted } = useTodos();
    const searchParams = useSearchParams();
    const todosFilter = searchParams.get('todos');

    let filterTodos = todos;

    if (todosFilter === 'active'){
          filterTodos = filterTodos.filter((todo) => !todo.completed   )
    } else if (todosFilter === 'completed'){
        filterTodos = filterTodos.filter((todo) => todo.completed)

    }


    return (
        <ul>
            {filterTodos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="checkbox"
                        id={`todo-${todo.id}`}
                        checked={todo.completed}
                        onChange={()=>toggleTodosAsCompleted(todo.id)}
                    />

                    <label htmlFor={`todo-${todo.id}`}> {todo.task}</label>

                    {todo.completed && (
                        <button type="button" onClick={()=>handleTodoDelete(todo.id)}>Delete</button>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default Todos