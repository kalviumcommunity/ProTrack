import React from 'react';
import Productivity from './../assets/images/Productivity.png'
import './Style/login.css'
import Google from './../assets/images/google.jpg'
function Login(props) {
    return (
        <div className='login_parent_div'>
            <div className='menu_logo login_logo'>
                <img className='logo_icon' src={Productivity} alt="" />
                <h2>ProTrack</h2>
            </div>

            <div className='login_main_div' >
                <br />
                <h3> Sign in to your proTrack account </h3>

                <div className="inner_div_login">
                    
                        <label htmlFor="login_user_name">Username : </label>{" "}
                        <br />
                        <input
                            type="text"
                            id="login_user_name"
                            className="input_box_login"
                            placeholder="Enter Username"
                            onChange={(e) => { setPickerData({...pickerData , Name : e.target.value })}}
                        />
                  
                </div>

                <div className="inner_div_login">
                    
                        <label htmlFor="login_password">Password : </label>{" "}
                        <br />
                        <input
                            type="text"
                            id="login_password"
                            className="input_box_login"
                            placeholder="Enter Password"
                            onChange={(e) => { setPickerData({...pickerData , Name : e.target.value })}}
                        />
                  
                </div>

                <button  className="login_button"> Login </button>
                <button  className=" google_button"> <img src={Google} alt="" className='google_icon' /> Continue with Google </button>

                <div className='forgot_password'>
                     <h5 >Forgot Password ? </h5>
                </div>

            </div>
            
        </div>
    );
}

export default Login;