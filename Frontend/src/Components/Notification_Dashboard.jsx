import React, { useState } from 'react';
import './Style/notification_dashboard.css'
import down_arrow from './../assets/images/arrow-down-sign-to-navigate.png'
import parameters from '../config';

function Notification_Dashboard({handleDelete ,  elem}) {

    const token = JSON.parse(localStorage.getItem("token"));



    const [showBody , setShowBody] = useState(false)
    return (
        <div className='noti_dash_parent'>

            <div onClick={()=> {setShowBody(!showBody)}} className='noti_dash_title'> <h5> {elem.Title} </h5> <img src={down_arrow} alt="" /></div>
           
            {  showBody && <div className='noti_dash_body'><p>&nbsp; &nbsp; &nbsp; &nbsp; { elem.Body }</p> <div className='delete_button'> <button onClick={ ()=> { handleDelete(elem._id)}} className='button delete'> Delete </button></div></div> }
            

        </div>
    );
}

export default Notification_Dashboard;