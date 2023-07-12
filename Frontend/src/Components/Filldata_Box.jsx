import React, { useState } from 'react';
import Man from './../assets/images/man.png'
import './Style/filldata_box.css'
import parameters from '../config';

function Filldata_Box({ pickerObj , dayObj , taskObj , setPickerData }) {

    const [workDone, setWorkDone] = useState(0);
    const [remark, setRemark] = useState("");
    const [post, setPost] = useState(false)

    const st = new Date(taskObj.start_time)

    const et = new Date(taskObj.end_time)

    function postData() {
        if (workDone != "") {
               
            const postObj = {
                method: "PATCH",
                headers: { 'Content-Type': "application/json"  },
                body: JSON.stringify({
                    user_id: pickerObj._id,
                    day_id: dayObj._id,
                    task_id: taskObj._id,
                    work_done : workDone,
                    remark,
                    task : taskObj.task
                    

                })
            }

            setPost(true);

                    fetch(`${parameters.backend_ip}/picker/filldata`, postObj)
                    .then((res ) => {   return res.json(); })
                    .then((res ) => { setPickerData( res )})

        }else{
            alert("Please enter work done !");
        }
    }

    return (
        <div className='filldata_box_parent_div'>

            <div className='filldata_box_header'>
                <div>
                    <img className='filldata_user_img' src={Man} alt="" />
                    <h3>{pickerObj.name}</h3>
                </div>
                <div>
                    <h3>
                    { taskObj.task != "Packing" ? "Scrum ID : " : "Pack Station : " } { taskObj.user_id}
                    </h3>
                </div>
            </div>
            <hr />
            <div className='filldata_box_middle_div'>

                <div>
                    <div className='filldata_box_time'>
                        <span> Start Time : </span>
                        <h3> { st.getHours()  < 10 ? "0" + st.getHours() : st.getHours()  }:{st.getMinutes() < 10 ? "0" + st.getMinutes() : st.getMinutes() } </h3>
                        <p> ( {st.getDate()  < 10 ? "0" + st.getDate() : st.getDate() }/{st.getMonth() < 11 ? "0" + ( st.getMonth() + 1) : ( st.getMonth() + 1) }/{st.getFullYear()} ) </p>
                    
                    </div>
                    <div className='filldata_box_time'>
                        <span> End Time &nbsp;:  </span>
                        <h3> { et.getHours()  < 10 ? "0" + et.getHours() : et.getHours()  }:{et.getMinutes() < 10 ? "0" + et.getMinutes() : et.getMinutes() } </h3>
                        <p> ( {et.getDate()  < 10 ? "0" + et.getDate() : et.getDate() }/{et.getMonth() < 11 ? "0" + ( et.getMonth() + 1) : ( et.getMonth() + 1) }/{et.getFullYear()} ) </p>
                    
                    </div>

                </div>
                <div>
                   <label htmlFor="workdone_value">{   taskObj.task == "Packing" ? "Orders : " : "Lines : "} </label>
                   <input onChange={(event) => setWorkDone(event.target.value)} type="text" id='workdone_value' />
                </div>
            </div>
            <hr />
            <div className='filldata_box_last_div'>

                <div>
                    <label htmlFor="task_remark"> Enter Remarks :  </label>
                    <br />
                    <input onChange={(event) => setRemark(event.target.value)}  type="text" id='task_remark' />
                </div>
                <div>
                    <button disabled={post} onClick={postData} className='filldata_box_post_btn'> Post </button>
                </div>
            </div>
            
        </div>
    );
}

export default Filldata_Box;