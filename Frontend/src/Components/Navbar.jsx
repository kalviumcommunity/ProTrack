import React, { useState } from 'react';
import Menu from './../assets/images/menu.png'
import Productivity from './../assets/images/productivity.png'
import downArrow from './../assets/images/arrow-down-blue.png'
import Man from './../assets/images/man.png'
import './Style/navbar.css'

import { Outlet, Link } from "react-router-dom";


function Navbar(props) {

    let currentURL = window.location.href;
    currentURL = currentURL.split('/');
    currentURL = currentURL[currentURL.length-1];

    const [ activePage , setActivePage ] = useState(currentURL)
    

    const style = { color: "yellow", fontSize: "1.5em" }
    return ( <>        <div id='nav_parent'>
            <Link to="/home">
             <div className='menu_logo'>
               <img className='logo' src={Menu} alt="" /> 
               <img className='logo_icon' src={Productivity} alt="" />
                <h2>ProTrack</h2>
            </div>
            </Link>

            <div className='nav_buttons'>
            <Link to="/home"><button onClick={()=> { setActivePage("home")}}  className={activePage == "home" ?"button active":'button '}>Home</button></Link>
            <Link to="/dashboard"><button onClick={()=> { setActivePage("dashboard")}} className={activePage == "dashboard" ?"button active":'button '}>Dashboard</button></Link>
            <Link to="/fill"><button onClick={()=> { setActivePage("fill")}} className={activePage == "fill" ?"button active":'button '}>Fill Data</button></Link>
            <Link to="/task"><button onClick={()=> { setActivePage("task")}} className={activePage == "task" ?"button active":'button '}>Task</button></Link>
            <Link to="/addpicker"><button onClick={()=> { setActivePage("addpicker")}} className={activePage == "addpicker" ?"button active":'button '}>Add</button></Link>
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