import React, { useState } from "react";
import "./Style/add_picker.css";
import parameters from "../config";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add_Picker(props) {
  const [pickerData, setPickerData] = useState({});

  const token = JSON.parse(localStorage.getItem("token"));

  async function addData(e) {
    const reqData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: pickerData.Name,
        gender: pickerData.Gender,
        scrum: pickerData.ScrumId,
        doj: pickerData.DOJ,
        password: 12345678,
        shift: "No Shift",
        shift_status: "end",
        current_task: "No Task",
        current_id: pickerData.ScrumId,
        current_status: "0",
        start_time: new Date(),
        end_time: new Date(),
      }),
    };

    fetch(`${parameters.backend_ip}/picker/addpicker`, reqData)
      .then((res) => res.json())
      .then((res) => console.log(res));
    setPickerData({Name : "" , ScrumId : "" , DOJ : "" , Gender : "" })
    toast.success("Picker Added Sucessfully ", {
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

  return (
    <div id="add_picker_root">
      <div className="add_picker_parent_div">
        <h2>Add Picker</h2>
        <div className="inner_div_add_picker">
          <label htmlFor="user_name">Name : </label>{" "}
          <input
            type="text"
            id="user_name"
            className="input_box_add_picker"
            placeholder="Enter Username"
            value={pickerData.Name}
            onChange={(e) => {
              setPickerData({ ...pickerData, Name: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="scrum_id">Scrum ID : </label>{" "}
          <input
            type="text"
            id="scrum_id"
            className="input_box_add_picker"
            placeholder="Enter Scrum ID"
            value={pickerData.ScrumId}
            onChange={(e) => {
              setPickerData({ ...pickerData, ScrumId: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="doj">DOJ : </label>
          <input
            className="input_box_add_picker"
            type="date"
            id="doj"
            value={pickerData.DOJ}
            onChange={(e) => {
              setPickerData({ ...pickerData, DOJ: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="gender"> Gender : </label>
          <select
            className="select_tag_add_picker"
            name="gender"
            id="gender"
            value={pickerData.Gender}
            onChange={(e) => {
              setPickerData({ ...pickerData, Gender: e.target.value });
            }}
          >
            <option value=""> Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="image">Upload Image : </label>{" "}
          <input type="file" className="file_input_add_picker" id="image" />
        </div>
        <button onClick={addData} className="add_picker_submit_btn">
          {" "}
          Submit{" "}
        </button>
      </div>
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
    
    </div>
  );
}

export default Add_Picker;
