import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar(props) {
    let nav = props.currentUser ?
        <div className="nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Diary">Diary List</Link></li>
                <li><Link to="/Diary/new">Add Diary</Link></li>
                <li><span className="user">Welcome {props.currentUser.name}</span></li>
                <li><Link to="/" onClick={props.handleLogout} activeClassName="active">Logout</Link></li>
            </ul>
        </div>
            :
        <div className='nav'>  
                <ul>
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                    <li><Link to="/login" activeClassName="active">Login</Link></li>
                    <li><Link to="/signup" activeClassName="active">Signup</Link></li>
                </ul>
        </div>
    
    return nav
}

export default Navbar

