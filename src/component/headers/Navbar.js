import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    function openNav() {
        document.getElementById("mySidenav").style.cssText = "width:270px; border-right: 10px solid #fff; box-shadow: 1px 8px 8px 8px rgba(73,21,155,0.3); -webkit-box-shadow: 1px 8px 8px 8px rgba(73,21,155,0.3);  -moz-box-shadow: 1px 8px 8px 8px rgba(73,21,155,0.3);";
    }
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                    <span className="menu" onClick={openNav}>
                        <i className="fa fa-bars mr-3" style={{fontSize:25, color:"#2f5df6", marginBottom:20}} />
                    </span>
                <Link className="zIndex-1 ml-n5 mr-5" to={"#"}>
                    <img
                        src="/images/logo.png"
                        className="d-none d-sm-none d-md-block ml-n5 mr-5"
                        alt={""}/>
                </Link>
                <ul className="nav">
                    <li className="nav-item">
                        <Link
                            className="nav-link text-black cursor-pointer"
                            data-toggle="modal"
                            data-target="#loginModal"
                            data-whatever=""
                            to={"#"}><p style={{color:"#1443d9", fontWeight:"bold"}}>Đăng nhập</p>
                        </Link>
                    </li>
                    <li className="nav-item"><span className="nav-link color-blue">|</span></li>
                    <li className="nav-item">
                        <Link
                            className="nav-link text-black cursor-pointer"
                            data-toggle="modal"
                            data-target="#signUpModal"
                            data-whatever=""
                            to={"#"}>
                            <p style={{color:"#1443d9", fontWeight:"bold"}}>Đăng ký</p></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}