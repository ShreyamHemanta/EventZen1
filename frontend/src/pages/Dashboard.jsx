import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl">Welcome, {user?.email}!</h1>
      <button onClick={logout} className="mt-4 bg-red-500 text-white px-4 py-2">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
