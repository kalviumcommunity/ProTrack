import React from "react";

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
    <div className="home_task_parent">
      <div>
        <p>
          {sd.getHours()} : {sd.getMinutes()}
        </p>
        <p>
          {task.end_time == null
            ? ""
            : `${ed.getHours()} : ${ed.getMinutes()}`}{" "}
        </p>
      </div>

      <div>
        <p>{task.task}</p>

        <p>{task.task == "Odd/Case" ? "-" : task.user_id}</p>
      </div>

      <div>
        <p>
          {task.task == "Cluster"
            ? "Lines"
            : task.task == "Odd/Case"
            ? "Hu Count"
            : "Orders"}
        </p>

        <p>
          {task.task == "Odd/Case" ? task.user_id : task.work_done}
        </p>
      </div>

      <div>
        <p>Productivity</p>
        <p>{avg}</p>
      </div>
    </div>
  );
}

export default Dashboard_Child3;
