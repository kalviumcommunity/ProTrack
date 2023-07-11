import React from "react";
import './Style/add_picker.css'

function Add_Picker(props) {
  return (
    <div id="add_picker_root">
      <div className="add_picker_parent_div">
        <h2>Add Picker</h2>
        <div className="inner_div_add_picker">
          <label htmlFor="user_name">Name : </label>{" "}
          <input type="text" id="user_name" className="input_box_add_picker" placeholder="Enter Username" />
        </div>
        <div>
          <label htmlFor="scrum_id">Scrum ID : </label>{" "}
          <input type="text" id="scrum_id" className="input_box_add_picker" placeholder="Enter Scrum ID" />
        </div>
        <div>
          <label htmlFor="doj">DOJ : </label> 
          <input className="input_box_add_picker" type="date" id="doj" />
        </div>
        <div>
          <label htmlFor="gender" > Gender : </label>
          <select className="select_tag_add_picker" name="gender" id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="image">Upload Image : </label>{" "}
          <input type="file" className="file_input_add_picker" id="image" />
        </div>
        <button className="add_picker_submit_btn"> Submit </button>
      </div>
    </div>
  );
}

export default Add_Picker;
