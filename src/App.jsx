import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Listing from './pages/Listing';
import Details from "./pages/Details";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem('token'))
    }, [])

    const handleStatus = (e) => {
        setIsLoggedIn(e)
    }
    return (
        <Router>
          <div>
            <Navbar isLoggedIn={isLoggedIn} handleStatus={handleStatus} />
            <Routes>
                <Route
                    path="/login"
                    element={
                        <PublicRoute redirectTo="/">
                            <Login handleStatus={handleStatus} />
                        </PublicRoute>
                    }
                />
                <Route
                    path="/"
                    element={
                        <PrivateRoute redirectTo="/login">
                          <Listing />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/details/:alphacode"
                    element={
                        <PrivateRoute redirectTo="/login">
                            <Details />
                        </PrivateRoute>
                    }
                />
            </Routes>
          </div>
        </Router>
    )
}

export default App;
