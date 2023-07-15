import React, { useEffect, useState } from 'react';
import './Style/dash_model.css'
import parameters from '../config';

function Dash_Model({ handleSubmit , setShowModel}) {

    const token = JSON.parse(localStorage.getItem("token"));

    const [notification , setNotification ] = useState({
        Title : "",
        Body : ""
    });

    return (
        <div className='dash_model_parent'>

            <input onChange={(e)=> {setNotification({...notification , Title : e.target.value })}} id='noti_title' type="text" placeholder='Enter Title' />
            <textarea onChange={(e)=> {setNotification({...notification , Body : e.target.value })}} name="noti_body" id="noti_body" placeholder='Enter description here....'></textarea>
            <div className='dash_model_buttons' >
                <button className='button' onClick={()=>{handleSubmit(notification)}} >Submit</button>
                <button className='button' onClick={()=> { setShowModel(false)  }}>Cancel</button>
            </div>
        </div>
    );
}

export default Dash_Model;