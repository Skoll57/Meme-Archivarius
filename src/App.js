import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Register } from "./Components/Register/Register";
import { Login } from "./Components/Register/Login";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
