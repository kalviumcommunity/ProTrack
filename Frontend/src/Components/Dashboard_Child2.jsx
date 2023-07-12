import React, { useState } from "react";
import Dashboard_Child3 from "./Dashboard_Child3";

function Dashboard_Child2({ dayObj }) {
  const [showShift, setShowShift] = useState(true);

  let st = new Date(dayObj.start_time); //    shift start  time
  let et = new Date(dayObj.end_time);

  return (
    <>
      <li className="li_nested_shift">
        {dayObj.task_list.length > 0 && (
          <button
            className="home_button_task"
            onClick={() => {
              setShowShift(!showShift);
            }}
          >
            <div
              style={{
                margin: "0px",
                display: "flex",
                gap: "20px",
                justifyContent: "space-evenly",
                margin: "0px",
                padding: "0px",
              }}
            >
              <p>
                {" "}
                {st.getDate()}-{st.getMonth() + 1}-{st.getFullYear()}{" "}
              </p>
              <p> {dayObj.shift}</p>
              <p>
                {st.getHours()} : {st.getMinutes()}
              </p>
              <p>
                {dayObj.end_time == null
                  ? " "
                  : `${et.getHours()} : ${et.getMinutes()}`}
              </p>
            </div>
          </button>
        )}

        {showShift && (
          <ul className="nested_task">
            <li className="nested_task">
              {dayObj.task_list.length > 0 &&
                dayObj.task_list.map((task, index) => {
                  return <Dashboard_Child3 key={index + 1} task={task} />;
                })}
            </li>
          </ul>
        )}
      </li>
    </>
  );
}

export default Dashboard_Child2;
