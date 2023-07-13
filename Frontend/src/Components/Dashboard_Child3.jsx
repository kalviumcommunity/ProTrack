import React from "react";
import './Style/dashboard_child3.css'

function Dashboard_Child3({ task }) {
  //     //   Calculating Cluster Productivity
  // //****************************************************** */

  let ed = new Date(task.end_time);
  let sd = new Date(task.start_time);
  let dur = ed - sd;
  let avg = 0;
  if (task.task == "Odd/Case") {
    avg = (task.user_id / (dur / 3600000)).toFixed(2);
  } else {
    avg = (task.work_done / (dur / 3600000)).toFixed(2);
  }

  //  console.log(avg);

  // //  *******************************************************************

  return (
    <div className="home_task_parent dashboard_c3">
      <div>
        <p>
          Start Time : &nbsp;
          <strong>

          {sd.getHours() < 10 ? "0" +  sd.getHours() : sd.getHours() } : {sd.getMinutes() < 10 ? '0' + sd.getMinutes() : sd.getMinutes()}

          </strong>
        </p>
        <p>
          End Time &nbsp;:  &nbsp;
          <strong>

          {task.end_time == null
            ? " "
            : `${ed.getHours() < 10 ? "0" + ed.getHours() : ed.getHours() } : ${ed.getMinutes() < 10 ? "0" + ed.getMinutes() : ed.getMinutes() }`}{" "}
          
          </strong>
        </p>
      </div>

      
      <div   >
        <div className="dc3_task_id" >
        <p>Task  </p> <p> : <strong>   {task.task} </strong>    </p> 
        </div>
        <div  className="dc3_task_id" > 
        <p>  ID   </p> <p> : <strong> {task.task == "Odd/Case" ? "-" : task.user_id} </strong> </p> 
        </div>
       

      </div>

      <div>
        <div className="dc3_workdone">
          <p>  {task.task == "Cluster"
            ? "Lines "
            : task.task == "Odd/Case"
            ? "Hu Count "
            : task.task == "Packing"
            ? "Orders  " : " "} 
          </p>
          <p> &nbsp;
             {task.task == "Cluster" ? ":" : task.task == "Odd/Case" ? ":" : task.task == "Packing" ? ":" : " "} 
             <strong>  {task.task == "Odd/Case" ? task.user_id != 0 ? task.user_id : " " : task.work_done != 0 ? task.work_done : ' '} </strong>  </p>
        </div>

        <div className="dc3_workdone" > 
          <p> { avg != 0 ? "Productivity " : " " }  </p>
          <p> &nbsp;{ avg != 0 ? ":" : " "} <strong> { avg != 0 ? avg : " "}  </strong>  </p>
        </div>
      </div>


    </div>
  );
}

export default Dashboard_Child3;
