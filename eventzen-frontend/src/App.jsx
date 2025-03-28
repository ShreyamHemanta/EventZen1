import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import EventList from './pages/EventList';
import CreateEvent from './pages/CreateEvent';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <AuthProvider>
            <Header />
            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/events" element={<EventList />} />
                    <Route path="/create-event" element={<CreateEvent />} />
                </Route>
                
            </Routes>
            <Footer />
        </AuthProvider>
    );
};

export default App;
