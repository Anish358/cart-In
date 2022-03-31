import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Dashboard, SignUp, Login, Cart, Payment } from "./Pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Cart />} />
          <Route path="/login" element={<Payment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
