import React from "react";
import {Link} from 'react-router-dom';
import Button from "../components/Button"

function Navbar({isLoggedIn, handleStatus}) {

  const handleLogout = () => {
    localStorage.removeItem('token');
    handleStatus(false)
  }

  return (
    <div className="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-gray-900">
      <nav className="flex items-center container mx-auto h-full justify-between">
        <h1 className="font-semibold uppercase text-lg text-gray-200">
          🔄 Demo App
        </h1>
        <div>
          {isLoggedIn && <ul className="flex items-center space-x-10 text-sm">
            <li><Link to="/" className="text-gray-400 hover:text-gray-100">Listing</Link></li>
          </ul>}
        </div>
        {isLoggedIn ?
            <Link to="/login">
              <Button placeholder="Logout" onClick={handleLogout} className="px-6 py-2 text-white bg-gradient-to-r from-purple-500 to-blue-500"/>
            </Link>
            :
            <Link to="/login">
              <Button placeholder="Login" className="px-6 py-2 text-white bg-gradient-to-r from-purple-500 to-blue-500"/>
            </Link>
        }
      </nav>
    </div>
  );
}

export default Navbar;
