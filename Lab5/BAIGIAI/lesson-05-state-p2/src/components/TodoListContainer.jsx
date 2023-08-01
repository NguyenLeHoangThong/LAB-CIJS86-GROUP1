import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoListContainer = (props) => {
  // const [count, setCount] = useState(0);
  // console.log("render", count);

  // console.log(todos);
  // const todos = [
  //   {
  //     id: 1,
  //     title: "Todo 1",
  //     isCompleted: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Todo 2",
  //     isCompleted: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Todo 3",
  //     isCompleted: false,
  //   },
  // ];

  // const onCLickAddTodo = () => {
  //   const newTodo = {
  //     id: 4,
  //     title: "Todo 4",
  //     isCompleted: false,
  //   };

  //   // const newTodos = todos.concat([newTodo]);
  //   // shallow copy
  //   // string, boolean, number, undefined, null: a = 1, a = 2
  //   // array, object: a = [{a: 1, b: 2}], a = [{a: 1, b: 2}, {a: 3, b: 4}]

  //   // todos[0].id = 5;
  //   // todos.push(newTodo);
  //   // console.log(todos);
  //   // setTodos([...todos, newTodo]);
  //   // console.log("count", count);
  //   // setCount(0);
  // };

  // const ul = React.createElement("ul", null, [
  //   React.createElement("li", null, "Todo 1"),
  //   React.createElement("li", null, "Todo 2"),
  // ]);
  // const todoItems = [];

  // for (let i = 0; i < todos.length; i++) {
  //   todoItems.push(<TodoItem />);
  // }

  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem todo={todo} onDeleteTodo={props.onDeleteTodo} onSetCompleteToto={props.onSetCompleteToto} />
      ))}

      {/* <button onClick={onCLickAddTodo}>add</button> */}
    </div>
  );
};

export default TodoListContainer;
