import { useState } from "react";
import "./App.css";
import TodoFooter from "./components/TodoFooter";
import TodoFormInput from "./components/TodoFormInput";
import TodoHeader from "./components/TodoHeader";
import TodoListContainer from "./components/TodoListContainer";
// import HomePage from "./components/HomePage";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todo 1",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Todo 2",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Todo 3",
      isCompleted: false,
    },
  ]);

  const onAddTodo = (newTodo) => {
    const newTodps = [newTodo, ...todos]; // add lên đầu thì dễ, đổi chỗ rải newTodo và ...todos là xong
    setTodos(newTodps);
  };

  const onDeleteTodo = (id) => {
    // hàm này dùng để xóa 1 todo list, mình sẽ tạo thêm 1 button bên todoItem để khi bấm vào thì xóa item đó
    const newTodps = todos.filter((item) => item.id !== id); // lấy ra những item nào mà không phải là id cần xóa
    setTodos(newTodps);
  };

  const onSetCompleteToto = (id) => {
    // hàm này dùng để đặt lại trạng thái của todo item (isComplete)
    const newTodps = todos.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          isCompleted: !item.isCompleted, // đảo ngược lại isCompleted, tất cả key khác giữ nguyên giá trị
        };
      }
      return item;
    }); // mình làm cách đơn giản nhất, map qua toàn bộ danh sách các công việc hiện tại, công việc nào có id trùng với id vừa double click vào thì đổi isCompleted của nó
    setTodos(newTodps);
  };

  return (
    <div>
      <TodoHeader />
      <TodoFormInput onAddTodo={onAddTodo} />
      <TodoListContainer todos={todos} onDeleteTodo={onDeleteTodo} onSetCompleteToto={onSetCompleteToto} />

      {/* Lưu ý logic truyền props ở đây: props là các hàm onDeleteTodo, onSetCompleteToto, được truyền từ App -> TodoListContainer -> TodoItem */}
      {/* TodoListContainer chỉ có nhiệm vụ truyền xuống TodoItem, chứ mình không dùng các hàm này trong TodoListContainer làm gì */}
      <TodoFooter />
    </div>
  );
}

export default App;
