import React from 'react';
import Man from './../assets/images/man.png'
import './Style/filldata_box.css'

function Filldata_Box(props) {
    return (
        <div className='filldata_box_parent_div'>

            <div className='filldata_box_header'>
                <div>
                    <img className='filldata_user_img' src={Man} alt="" />
                    <h3>Aman Ninave</h3>
                </div>
                <div>
                    <h3>
                    Pack Station : 08
                    </h3>
                </div>
            </div>
            <hr />
            <div className='filldata_box_middle_div'>

                <div>
                    <div className='filldata_box_time'>
                        <span> Start Time : </span><h3> 13:40 </h3>
                    </div>
                    <div className='filldata_box_time'>
                        <span> Start Time : </span><h3> 13:40 </h3>
                    </div>

                </div>
                <div>
                   <label htmlFor="workdone_value">Total Orders : </label>
                   <input type="text" id='workdone_value' />
                </div>
            </div>
            <hr />
            <div className='filldata_box_last_div'>

                <div>
                    <label htmlFor="task_remark"> Enter Remarks :  </label>
                    <br />
                    <input type="text" id='task_remark' />
                </div>
                <div>
                    <button className='filldata_box_post_btn'> Post </button>
                </div>
            </div>
            
        </div>
    );
}

export default Filldata_Box;