import React from "react";
import Home_Task from "./Home_Task";
import { useState , useEffect } from "react";

import './Style/task_box.css'
import { useSelector } from "react-redux";


function Task_Box({  task , shift }) {

    const [showShift, setShowShift] = useState(true);

    const [Tasklist, setTaskList] = useState({});

    let manpowerStats = {
      f_Cluster : 0,
      f_Packing : 0,
      f_Oddcase : 0,
      f_Absent : 0,
      f_Break : 0,
      s_Cluster : 0,
      s_Other : 0,
      s_Packing : 0,
      s_Oddcase : 0,
      s_Absent : 0,
      s_Break : 0,
      s_Other : 0,
      n_Cluster : 0,
      n_Packing : 0,
      n_Oddcase : 0,
      n_Absent : 0,
      n_Break : 0,
      n_Other : 0,
    }
    
    let Pickers = useSelector( (state ) => {
      return state.Pickers;
    } )


  useEffect(() => {
    if (Pickers.length > 0) {
      
     let  TL = Pickers.filter((elem) => {
        return elem.shift == shift && elem.current_task == task;
      });

      setTaskList(TL);
    }
  }, [Pickers]);


  

  return (
    <>
      <li className="li_nested_shift">
        {
          Tasklist.length > 0 &&
          <button className="home_button_task" onClick={() => {setShowShift(!showShift)}}  > {task} </button>
        }

        
       {    showShift &&
        <ul className="nested_task">
          <li className="nested_task">

            {  Tasklist.length > 0 &&
                Tasklist.map(( user , index ) => {
                    return (
                        <Home_Task key={index+1} user={user}/>
                    )
                })
            }
            
          </li>
        </ul>
        }
      </li>
    </>
  );
}

export default Task_Box;
