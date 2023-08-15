import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserDetail from "./components/UserDetail";
import AboutMe from "./components/AboutMe";
import Courses from "./components/Courses";
import EditProfile from "./components/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <UserDetail />
        <div style={{ flex: 1 }}>
          <div className="row">
            <Link to="/about-me">About Me</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/edit-profile">Edit Profile</Link>
          </div>

          <div className="main-content">
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/edit-profile" element={<EditProfile />} />

              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
