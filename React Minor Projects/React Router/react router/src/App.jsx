import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import DashBoard from './Pages/DashBoard';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-slate-950 flex flex-col">
      <NavBar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="signup" element={<SignUp setLoggedIn={setLoggedIn} />} />
        <Route path="dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;