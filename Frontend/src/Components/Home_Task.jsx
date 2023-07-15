import React, { useState } from "react";
import "./Style/home_task.css";
import Man from "./../assets/images/man.png";
import { useDispatch, useSelector } from "react-redux";
import getData from "../Redux/Action/getData.action";
import updateData from "../Redux/Action/updateData.action";
import parameters from "../config";

import Model from "./Model";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home_Task({ user }) {

  const token = JSON.parse(localStorage.getItem("token"));
  

  const [modelState, setModelState] = useState({
    state: false,
    modelValue: "",
    message: "",
    initialValue: "",
    placeholderValue: "",
    nextFunction : ""
  });
  

  let dispatch = useDispatch();

  let tme = "00:00";
  let par = "";
  let rmk = "";
  if (user.current_task != "No Task") {
    let taskObj =
      user.day[user.day.length - 1].task_list[
        user.day[user.day.length - 1].task_list.length - 1
      ];
    par = taskObj.user_id;                                           // for storing last day last task userid and remark for showing to task box
    rmk = taskObj.remark;
    let st = new Date(taskObj.start_time);
    let hr = st.getHours();
    let mn = st.getMinutes();
    if (hr < 10) {
      hr = `0${hr}`;
    }
    if (mn < 10) {
      mn = `0${mn}`;
    }
    tme = `${hr} : ${mn}`;                                              // time for task box 
  }

  function changeShift(shift) {
    if (shift != "") {
      if (user.current_task == "No Task") {
        const reqData = {
          method: "PATCH",
          headers: { "Content-Type": "application/json",  "authorization" : `Bearer ${token}` },
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
        toast.info('Please end the task first !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }
  }

  function toggleShiftPre () {
    if (user.shift_status == "start") {
      setModelState({
        state: true,
        message: "Type 1 to end the Shift ",
        placeholderValue: "Enter 1 here...",
        initialValue: 0,
        nextFunction : "toggleShift"
      });
    }else{
      toggleShift(1);                                         // for starting the shift we don't need confirmation   
    }
  }

  function toggleShift(val) {
    let conf = 0;

    if (user.shift_status == "start") {
      conf = val;
      if(conf == 1 ){
        if(user.current_task != "No Task"){
          toast.info('Please end the task first !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            conf=0;
        }
      }else if ( conf != 1) {
        toast.info('Wrong input value !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        conf = 0;
      } else if (conf != null) {
        conf = 0;
      }
    } else {
      conf = 1;
    }

    if (conf == 1) {
      const reqData = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" , "authorization" : `Bearer ${token}` },
        body: JSON.stringify({
          shift: user.shift,
          shift_status: user.shift_status,
        }),
      };

      fetch(
        `${parameters.backend_ip}/picker/startshift?id=${user._id}`,
        reqData
      )
        .then((res) => res.json())
        .then((res) => {
          updateData(dispatch, res);
        });
    }
  }

  function changeTaskPre(task) {
    if (user.shift_status == "start") {
      if (task == "Cluster") {
        setModelState({
          task,
          state: true,
          message: "Please enter scrum ID :",
          placeholderValue: "Enter scrum ID here...",
          initialValue: "",
        });
      } else if (task == "Odd/Case") {
        setModelState({
          task,
          state: true,
          message: "Please enter HU count :",
          placeholderValue: "Enter HU count here...",
          initialValue: "",
        });
      } else if (task == "Packing") {
        setModelState({
          task,
          state: true,
          message: "Please enter pack station number :-",
          placeholderValue: "Enter pack station number here...",
          initialValue: "",
        });
      } else if (task == "No Task") {
        changeTask(task, "no task");
      } else if (task == "Break") {
        changeTask(task, user.current_id);
      } else if (task == "Other") {
        setModelState({
          task,
          state: true,
          message: "Other Task : Please enter remark  :-",
          placeholderValue: "Enter remark here...",
          initialValue: "",
        });
      } else if (task == "Absent") {
        setModelState({
          task,
          state: true,
          message: "Absent : Please enter remark  :-",
          placeholderValue: "Enter remark here...",
          initialValue: "",
        });
      }
    } else {
      toast.info('Please Start the shift !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
    }
  }

  function changeTask(task, prm) {
    let updatedhu = par;
    let pendinghu = 0;
    // if (user.current_task == "Odd/Case") {
    //   pendinghu = prompt("Please enter pending HU !", -1);
    //   updatedhu = par - parseInt(pendinghu);
    // }

    if (
      task != "" &&
      prm != null &&
      prm != "" &&
      pendinghu != -1 &&
      pendinghu != null
    ) {
     

      const reqData = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "authorization" : `Bearer ${token}`
        },
        body: JSON.stringify({
          pendinghu,
          updatedhu,
          parameter: prm,
          task,
          current_task: user.current_task,
        }),
      };

      fetch(
        `${parameters.backend_ip}/picker/changetask?id=${user._id}`,
        reqData
      )
        .then((res) => res.json())
        .then((res) => {
          updateData(dispatch, res);
        });
    }
  }

  return (
    <>
      <div className="home_task_parent">
        <div className="home_task_user">
          <img src={Man} alt="" />
          <div>
            <h4>{user.name}</h4>
            <select
              className="home_task_task_list"
              name=""
              id=""
              onChange={(e) => changeTaskPre(e.target.value)}
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
          <p>
            {" "}
            {user.current_task == "Cluster"
              ? `Scrum ID : `
              : user.current_task == "Packing"
              ? `PS No : `
              : user.current_task == "Odd/Case"
              ? `HU Count : `
              : user.current_task == "Absent"
              ? "Remark : "
              : user.current_task == "Other"
              ? "Remark : "
              : ""}{" "}
            <strong>
              {" "}
              {user.current_task == "Cluster"
                ? `${par}`
                : user.current_task == "Packing"
                ? `${par}`
                : user.current_task == "Odd/Case"
                ? `${par}`
                : rmk}{" "}
            </strong>{" "}
          </p>

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
          <p>
            {" "}
            {user.current_task != "No Task" ? "Start Time - " : ""}{" "}
            <strong> {user.current_task != "No Task" ? tme : ""} </strong>{" "}
          </p>

          <button className="end_shift_button" onClick={() => toggleShiftPre()}>
            {" "}
            {user.shift_status == "end" ? "Start Shift" : "End Shift"}{" "}
          </button>
        </div>
      </div>

      {modelState.state && (
        <Model
          toggleShift={toggleShift}
          changeTask={changeTask}
          modelState={modelState}
          setModelState={setModelState}
        />
      )}
      <ToastContainer
        className="toast-position"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Home_Task;
