import React from "react";
import "./cssnav.css"
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar (){
    const navigate = useNavigate()
    const username = localStorage.getItem("username")

    const logout = () => {
        localStorage.clear()
        navigate("/login")
        window.location.reload()
    }
    return (
        <div>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>

            {username && 
            <li>
                <Link to={"/projects"}>Project</Link>
            </li>
            }
            
            {username ? 
            <li>
                <button onClick={logout}>logout</button>
            </li> :
            <li>
                <Link to={"/login"}>Login</Link>
            </li> 
            }
        </ul>
        </div>
    )

}

export default Navbar