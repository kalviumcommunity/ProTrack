import React, { useState } from "react";
import "./Style/add_picker.css";
import parameters from "../config";

function Add_Picker(props) {
  const [pickerData, setPickerData] = useState({});
  
  async function addData(e) {

    const reqData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: pickerData.Name,
        gender: pickerData.Gender,
        scrum: pickerData.ScrumId,
        doj: pickerData.DOJ,
        password: 12345678,
        shift: "No Shift",
        shift_status: "end",
        current_task: "No Task",
        current_id : pickerData.ScrumId,
        current_status: "0",
        start_time: new Date(),
        end_time: new Date(),
      }),
    };

    fetch(`${parameters.backend_ip}/picker/addpicker`, reqData)
      .then((res) => res.json())
      .then((res) => console.log(res));

    alert("Picker Added Sucessfully ");
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
            onChange={(e) => { setPickerData({...pickerData , Name : e.target.value })}}
          />
        </div>
        <div>
          <label htmlFor="scrum_id">Scrum ID : </label>{" "}
          <input
            type="text"
            id="scrum_id"
            className="input_box_add_picker"
            placeholder="Enter Scrum ID"
            onChange={(e) => { setPickerData({...pickerData , ScrumId : e.target.value })   }}
          />
        </div>
        <div>
          <label htmlFor="doj">DOJ : </label>
          <input
            className="input_box_add_picker" 
            type="date" 
            id="doj" 
            onChange={(e) => { setPickerData({...pickerData , DOJ : e.target.value }) }}
          />
        </div>
        <div>
          <label htmlFor="gender"> Gender : </label>
          <select className="select_tag_add_picker" name="gender" id="gender" onChange={(e) => { setPickerData({ ...pickerData , Gender : e.target.value }) }}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="image">Upload Image : </label>{" "}
          <input type="file" className="file_input_add_picker" id="image" />
        </div>
        <button onClick={addData}  className="add_picker_submit_btn"> Submit </button>
      </div>
    </div>
  );
}

export default Add_Picker;
