import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import "./TopBar.css";
// pages
import Contact from "./page/Contact";
import Todo from "./page/Todo";
import EmptyTasks from "./page/EmptyTaks";

import About from "./page/About";

function App() {
  return (
    <BrowserRouter>
      <main>
        <div class="header">
          <NavLink className="Navigat">IndexAdverts</NavLink>
          <div class="header-right">
            <NavLink className="Navigat" to="/">
              Home
            </NavLink>
            <NavLink className="Navigat" to="about">
              About
            </NavLink>
            <NavLink className="Navigat" to="contact">
              Contact
            </NavLink>
            <NavLink className="Navigat" to="empty">
              Empty
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route path="contact" element={<Contact />} />
          <Route path="/" element={<Todo />} />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="empty" element={<EmptyTasks />} />
          <Route path="empty" element={<EmptyTasks />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
