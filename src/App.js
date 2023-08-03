import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/home";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Course } from "./pages/courses";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="courses" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
