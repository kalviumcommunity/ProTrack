import React from 'react';
import Menu from './../assets/images/menu.png'
import Productivity from './../assets/images/productivity.png'
import downArrow from './../assets/images/arrow-down-blue.png'
import Man from './../assets/images/man.png'
import './Style/navbar.css'

import { Outlet, Link } from "react-router-dom";


function Navbar(props) {
    const style = { color: "yellow", fontSize: "1.5em" }
    return ( <>        <div id='nav_parent'>
             <div className='menu_logo'>
               <img className='logo' src={Menu} alt="" /> 
               <img className='logo' src={Productivity} alt="" />
                <h2>ProTrack</h2>
            </div>

            <div className='nav_buttons'>
            <Link to="/"><button className='button '>Home</button></Link>
            <Link to="/dashboard"><button className='button '>Dashboard</button></Link>
            <Link to="/fill"><button className='button '>Fill Data</button></Link>
            <Link to="/task"><button className='button '>Task</button></Link>
            <Link to="/addpicker"><button className='button '>Add</button></Link>
            </div>

            <div>
                <button className='button_user'>   <img className='logo small_logo' src={Man} alt="" /> Aman  <img className='small_logo' src={downArrow} alt="" /> </button>
            </div>
            
            
        </div>
        <div className='navbar_dummy_box'>

        </div>

        </>

    );
}

export default Navbar;