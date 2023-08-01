const TodoItem = (props) => {
  return (
    <div
      style={{
        textDecoration: props.todo.isCompleted ? "line-through" : "none",
      }}
    >
      <span onDoubleClick={() => props.onSetCompleteToto(props.todo.id)}>{props.todo.title}</span>
      <button onClick={() => props.onDeleteTodo(props.todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
