import React from 'react';
import Login from "./Login";
import SignUp from "./SignUp";
import Navbar from "./Navbar";
import SideNav from "./SideNav";

function SideNavBar() {
    return (
        <div>
            {/*Side Bar*/}
            <SideNav/>
            {/*Nav Bar*/}
            <Navbar/>
            {/*Login Modal*/}
            <Login/>
            {/*Signup modal*/}
            <SignUp/>
        </div>
    );
}

export default SideNavBar;