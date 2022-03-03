import React from "react";
import Logo from "../Navbar/Logo";


function Sidebar() {
    return (

        < div className="row" >
            <div className="col-3">
                <nav className="navbar bg-dark">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#"> <img src="./contact.jpg" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home </a>
                        </li>
                        <br />
                        <br/>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src=".D:\ReactJs\Images/goats.png" width={30} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Services </a>
                        </li>
                        <br />
                        <br/>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="D:\ReactJs\Images/goats.png" width={30} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact </a>
                        </li>
                        <br />
                        <br/>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="D:\ReactJs\Images/goats.png" width={30} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Blogs </a>
                        </li>
                        <br />
                        <br/>

                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="D:\ReactJs\Images/goats.png" width={30} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Blogs </a>
                        </li>
                        <br />
                        <br/>

                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="D:\ReactJs\Images/goats.png" width={30} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blogs </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div >

    );
}

export default Sidebar;
