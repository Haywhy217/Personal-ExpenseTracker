import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';

const App = () => {

    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //   // Fetch user data if needed, e.g., from local storage or API
    //   const fetchUser = async () => {
    //     const response = await fetch('/api/get_user');
    //     const userData = await response.json();
    //     if (userData) {
    //       setUser(userData);
    //     }
    //   };
    //   fetchUser();
    // }, []);


    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home  />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                
            </Routes>
            
        </Router>
    );
};

export default App;


