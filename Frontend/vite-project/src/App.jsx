import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./components/context/AuthContext";
import './App.css'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/pages/Dashboard';
import TaskBoard from './components/TaskBoard/TaskBoard';
import AuthContext from "./components/context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={user ? <Dashboard /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={user ? <TaskBoard /> : <Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App; 