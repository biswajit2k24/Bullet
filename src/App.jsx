import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register_Component/Register/Register";
import "./App.css";
import Global from "./Global/Global";
import Studentblog from "./Global/Road/Studentblog"
import Coursecatalog from "./Global/Road/Coursecatalog";
import LoginPage from "./Register_Component/Register/LoginPage";
import Reset from "./Register_Component/Register/Reset";
function App() {
  return (
    <div className="app-cont">
      <Router>
        <Routes>
         <Route path="/" element={<Global />} />
         <Route path="/register" element={<Register />} />
          <Route path="/Global" element={<Global />} />
          <Route path="/Global/student-blog" element={<Studentblog />} />
          <Route path="/Global/course-catalog" element={<Coursecatalog/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/reset" element={<Reset />} />
          <Route path="/login/reset" element={<LoginPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
