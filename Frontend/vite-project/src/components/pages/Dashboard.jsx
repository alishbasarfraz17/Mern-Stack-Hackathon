import React, { useContext } from 'react';
import TaskBoard from "../TaskBoard/TaskBoard";
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2>Welcome, {user?.username || 'User'} 👋</h2>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <TaskBoard />
    </div>
  );
};

export default Dashboard;
