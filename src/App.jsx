import { useState } from "react";
import "./App.css";
import LoginForm from "./component/LoginForm.jsx";
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./component/RegisterForm";
import HomePage from "./component/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;
