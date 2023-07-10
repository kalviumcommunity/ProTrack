import React from "react";
import "./Style/home_task.css";
import Man from "./../assets/images/man.png";
import { useDispatch, useSelector } from "react-redux";
import getData from "../Redux/Action/getData.action";
import updateData from "../Redux/Action/updateData.action";
import parameters from "../config";

function Home_Task({ user }) {

  let dispatch = useDispatch();

  let tme = "00:00";
  let par = "";
  let rmk = "";
  if (user.current_task != "No Task") {
    let taskObj = user.day[user.day.length - 1].task_list[user.day[user.day.length - 1].task_list.length - 1];
    par = taskObj.user_id;
    rmk = taskObj.remark;
    let st = new Date(taskObj.start_time);
    let hr = st.getHours();
    let mn = st.getMinutes();
    if(hr <10 ){  hr = `0${hr}`};
    if(mn <10 ){  mn = `0${mn}`};
    tme = `${hr} : ${mn}`;
  }

  function changeShift(shift) {
    if (shift != "") {
      if (user.current_task == "No Task") {
        const reqData = {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            shift,
          }),
        };

        fetch(
          `${parameters.backend_ip}/picker/changeshift?id=${user._id}`,
          reqData
        )
          .then((res) => res.json())
          .then((res) => {
            updateData(dispatch, res);
          });
      } else {
        alert("Please end the task first");
      }
    }
  }

  function toggleShift() {
    let conf = 0;

    if (user.shift_status == "start") {
      conf = prompt("Type 1 to end the Shift");
      console.log(conf);
      if (user.current_task == "No Task" && conf == 1) {
        conf = 1;
      } else if (conf != null) {
        alert("Please end the task first ! ");
        conf = 0;
      }
    } else {
      conf = 1;
    }

    if (conf == 1) {
      const reqData = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          shift: user.shift,
          shift_status: user.shift_status,
        }),
      };

      let dta = fetch(
        `${parameters.backend_ip}/picker/startshift?id=${user._id}`,
        reqData
      )
        .then((res) => res.json())
        .then((res) => {
          updateData(dispatch, res);
        });
    }
  }

  function changeTask(task) {
    let par = "";

    if (user.shift_status == "start") {
      let updatedhu = par;
      let pendinghu = 0;
      if (user.current_task == "Odd/Case") {
        pendinghu = prompt("Please enter pending HU !", -1);

        updatedhu = par - parseInt(pendinghu);
      }

      let prm = "";
      if (task == "Cluster") {
        prm = prompt(
          `Please enter scrum id ( last id : ${user.current_id} ) :`,
          ""
        );
      } else if (task == "Odd/Case") {
        prm = prompt(
          `Please Enter Count of HU ( pending HU : ${user.pending_hu} ) :-`,
          ""
        );
      } else if (task == "Packing") {
        prm = prompt("Please Enter Pack Station Number :- ", "");
      } else if (task == "No Task") {
        prm = "no task";
      } else if (task == "Break") {
        prm = user.current_id;
      } else if (task == "Other") {
        prm = prompt("Please Enter Remark ");
      } else if (task == "Absent") {
        prm = prompt("Please Enter Reason ");
      }

      if (
        task != "" &&
        prm != null &&
        prm != "" &&
        pendinghu != -1 &&
        pendinghu != null
      ) {
        const token = JSON.parse(localStorage.getItem("token"));

        const reqData = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            pendinghu,
            updatedhu,
            parameter: prm,
            task,
            current_task: user.current_task,
          }),
        };

        let dta = fetch(
          `${parameters.backend_ip}/picker/changetask?id=${user._id}`,
          reqData
        )
          .then((res) => res.json())
          .then((res) => {
            updateData(dispatch, res);
          });
      }
    } else {
      alert("Please Start the shift ! ");
    }
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
