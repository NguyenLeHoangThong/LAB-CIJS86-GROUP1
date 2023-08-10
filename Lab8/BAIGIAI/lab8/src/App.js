import logo from "./logo.svg";
import "./App.css";
import React, { createContext, useState, useEffect } from "react";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

export const TodoContext = createContext([]);

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos"))); // lấy dữ liệu từ localStorage

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // nếu có bất kì sự thay đổi nào của todos thì sẽ chạy lại useEffect

  const handleAddTodo = (todo) => {
    setTodos([...todos, {
      id: todos.length + 1,
      name: todo,
    }]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id, name) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            name,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <TodoContext.Provider
        value={{
          data: todos,
          handleAddTodo: handleAddTodo,
          handleDeleteTodo: handleDeleteTodo,
          handleEditTodo: handleEditTodo,
        }}
      >
        <InputTodo />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
