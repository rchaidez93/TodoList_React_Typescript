import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

import TodoList from './TodoList';

const initialTodos: Todo[] = [
  {
    text: 'do homework',
    complete: false
  },
  {
    text: 'watch movies',
    complete: true
  }
]

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline underline-offset-1">
        TODO!
      </h1>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <AddTodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
