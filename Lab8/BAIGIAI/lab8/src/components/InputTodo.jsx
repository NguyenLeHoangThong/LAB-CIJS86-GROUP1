import { useContext } from "react";
import { TodoContext } from "../App";
import React from "react";

let inputValue = "";

export default function InputTodo() {
  const { data, handleAddTodo } = useContext(TodoContext);

  const onChangeHandler = (e) => {
    inputValue = e.target.value;
  };

  const onClickAddButton = () => {
    if (inputValue !== "") {
      handleAddTodo(inputValue);
    }
  };

  return (
    <div>
      <input onChange={onChangeHandler} type="text" />
      <button onClick={onClickAddButton} className="btn btn-success">
        Add
      </button>
    </div>
  );
}
