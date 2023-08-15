import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListUsers from "./components/ListUsers";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" element={<ListUsers />} />
            <Route path="/user/:id" element={<UserDetail />} />

            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
