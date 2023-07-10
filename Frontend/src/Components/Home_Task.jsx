import React from "react";
import "./Style/home_task.css";
import Man from "./../assets/images/man.png";
// import parameters from "../config";

function Home_Task({ user }) {


  function changeShift(shift) {
    
  }

  function changeTask(task) {
   
  }

  return (
    <div className="home_task_parent">
      <div className="home_task_user">
        <img src={Man} alt="" />
        <div>
          <h4>{user.name}</h4>
          <select
            className="home_task_task_list"
            name=""
            id=""
            onChange={(e) => changeTask(e.target.value)}
          >
            <option value="">Task</option>
            <option value="Cluster">Cluster</option>
            <option value="Packing">Packing</option>
            <option value="Odd/Case">Odd/Case</option>
            <option value="Absent">Absent</option>
            <option value="Break">Break</option>
            <option value="Other">Other</option>
            <option value="No Task">No Task</option>
          </select>
        </div>
      </div>
      <div>
      <p> {user.current_task == "Cluster" ? `Scrum ID : ` : user.current_task == "Packing" ? `PS No : ` : user.current_task == "Odd/Case" ? `HU Count : ` : user.current_task == "Absent" ? "Remark : " :  user.current_task == "Other" ? "Remark : " : ""} <strong> {user.current_task == "Cluster" ? `${par}` : user.current_task == "Packing" ? `${par}` : user.current_task == "Odd/Case" ? `${par}` : rmk } </strong> </p>

        <select
          className="home_task_task_list"
          onChange={(e) => changeShift(e.target.value)}
          name=""
          id=""
        >
          <option value="">Shift</option>
          <option value="First Shift">First Shift</option>
          <option value="Second Shift">Second Shift</option>
          <option value="Night Shift">Night Shift</option>
          <option value="No Shift">No Shift</option>
        </select>
      </div>
      <div>
        <p>  {user.current_task != "No Task" ? "Start Time - " : ""} <strong> {user.current_task != "No Task" ? tme : ""} </strong> </p>

        <button className="end_shift_button" onClick={() => toggleShift()}>
          {" "}
          {user.shift_status == "end" ? "Start Shift" : "End Shift"}{" "}
        </button>
      </div>
    </div>
  );
}

export default Home_Task;
