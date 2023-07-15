import React from "react";
import Home_Task from "./Home_Task";
import { useState , useEffect } from "react";

import './Style/task_box.css'
import { useSelector } from "react-redux";


function Task_Box({task , shift }) {

    const [showShift, setShowShift] = useState(true);

    const [Tasklist, setTaskList] = useState({});

   
    
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
