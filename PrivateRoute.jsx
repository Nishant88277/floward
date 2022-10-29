import React from 'react';
import {Navigate} from "react-router-dom";

function PrivateRoute({ children, redirectTo }) {
    let isAuthenticated = localStorage.getItem("token");
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;