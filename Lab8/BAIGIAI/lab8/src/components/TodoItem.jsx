import React from "react";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../App";

let inputValue = "";

export default function TodoItem(props) {
  const { handleEditTodo, handleDeleteTodo } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    inputValue = props.data.name;
  }, [props.data.name]); // input value sẽ được set lại khi props.data.name thay đổi

  const onChangeHandler = (e) => {
    inputValue = e.target.value;
  };

  const handleClickEdit = () => {
    if (isEditing) {
      // nếu đang edit thì sẽ lưu lại
      handleEditTodo(props.data.id, inputValue); // lưu lại
      setIsEditing(false); // và không cho phép edit nữa
    } else {
      setIsEditing(true); // nếu không thì sẽ cho phép edit
    }
  };

  return (
    <li className="d-flex">
      {isEditing ? <input type="text" defaultValue={props.data.name} onChange={onChangeHandler}/> : <p>{props.data.name}</p>}
      <button onClick={() => handleDeleteTodo(props.data.id)} className="btn btn-danger">
        Delete
      </button>
      <button onClick={handleClickEdit} className="btn btn-info">
        {
            isEditing ? "Save" : "Edit"
        }
      </button>
    </li>
  );
}
