import React, { useState } from 'react';
import Menu from './../assets/images/menu.png'
import Productivity from './../assets/images/productivity.png'
import downArrow from './../assets/images/arrow-down-blue.png'
import Man from './../assets/images/man.png'
import './Style/navbar.css'

import { Outlet, Link } from "react-router-dom";


function Navbar(props) {

    const [ activePage , setActivePage ] = useState("Home")

    const style = { color: "yellow", fontSize: "1.5em" }
    return ( <>        <div id='nav_parent'>
             <div className='menu_logo'>
               <img className='logo' src={Menu} alt="" /> 
               <img className='logo' src={Productivity} alt="" />
                <h2>ProTrack</h2>
            </div>

            <div className='nav_buttons'>
            <Link to="/"><button onClick={()=> { setActivePage("Home")}} className={activePage == "Home" ?"button active":'button '}>Home</button></Link>
            <Link to="/dashboard"><button onClick={()=> { setActivePage("Dashboard")}} className={activePage == "Dashboard" ?"button active":'button '}>Dashboard</button></Link>
            <Link to="/fill"><button onClick={()=> { setActivePage("FillData")}} className={activePage == "FillData" ?"button active":'button '}>Fill Data</button></Link>
            <Link to="/task"><button onClick={()=> { setActivePage("Task")}} className={activePage == "Task" ?"button active":'button '}>Task</button></Link>
            <Link to="/addpicker"><button onClick={()=> { setActivePage("Add")}} className={activePage == "Add" ?"button active":'button '}>Add</button></Link>
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