import React, { useState , useEffect } from "react";
import "./Style/shift_box.css";
import { useSelector } from "react-redux";

import Task_Box from "./Task_Box";

function Shift_box({ shift }) {

  const [showShift, setShowShift] = useState(false);
  

  let task_list = [
    "No Task",
    "Cluster",
    "Packing", 
    "Odd/Case", 
    "Absent", 
    "Break",
    "Other"
  ]

  return (
    <>
      <ul>
        <li style={{ paddingLeft: ".3rem" }}>
          <button  className="home_button_shift"  onClick={() => {setShowShift(!showShift)}} > {shift}  </button>
          {showShift && (
            <ul className="ul_nested_shift">
                    {
                        task_list.map((task , index ) => {
                            return (
                                <Task_Box  shift={shift} task={task} key={index+1}/>
                            )
                        })
                    }
                   
            </ul>
          )}
        </li>
      </ul>
    </>
  );
}

export default Shift_box;
