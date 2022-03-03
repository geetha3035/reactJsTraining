import React from 'react';
import Logo from './Logo';
import Navbartext from './Navbartext';


const Navbar =() => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#"><Logo /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

            <li className="nav-item">
                <a className="nav-link" href="#"><Navbartext/></a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#"><Logo /></a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#"><Logo /></a>
            </li>
            <br></br>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </li>

        </ul>
    </div>
</nav>

    )
}
export default Navbar;