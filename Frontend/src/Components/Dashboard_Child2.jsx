import React, { useState } from "react";
import "./Style/dashboard_child2.css";
import Dashboard_Child3 from "./Dashboard_Child3";

function Dashboard_Child2({ dayObj }) {
  const [showShift, setShowShift] = useState(false);

  let st = new Date(dayObj.start_time); //    shift start  time
  let et = new Date(dayObj.end_time);

  return (
    <>
      <li className="li_nested_shift">
        {dayObj.task_list.length > 0 && (
          <>
            <button
              className="dashboard_task_btn"
              onClick={() => {
                setShowShift(!showShift);
              }}
            >
              <div>
                <strong>
                  {" "}
                  {st.getDate() < 10 ? "0" + st.getDate() : st.getDate()}-
                  {st.getMonth() < 11
                    ? "0" + (st.getMonth() + 1)
                    : st.getMonth() + 1}
                  -{st.getFullYear()}{" "}
                </strong>
              </div>

              <div>
                <h3>
                  {" "}
                  <strong> {dayObj.shift} </strong>{" "}
                </h3>
                <div className="day_time"> 
                  <p> From   </p>
                  <span> :- </span>
                  <strong>
                  &nbsp; {" "}
                    {st.getHours() < 10
                      ? "0" + st.getHours()
                      : st.getHours()} :{" "}
                    {st.getMinutes() < 10
                      ? "0" + st.getMinutes()
                      : st.getMinutes()}{" "}
                  </strong>
                </div>
                <div className="day_time">
                  <p>To  </p>
                  <span> :- </span>
                  <strong>
                    &nbsp;{" "}
                    {dayObj.end_time == null
                      ? " "
                      : `${
                          et.getHours() < 10
                            ? "0" + et.getHours()
                            : et.getHours()
                        } : ${
                          et.getMinutes() < 10
                            ? "0" + et.getMinutes()
                            : et.getMinutes()
                        }`}{" "}
                  </strong>
                </div>
              </div>

              <div className="productivity_daywise">
                <div>
                  
                    <p> Cluster Productivity </p>
                    <p>
                      {" "}
                      :{" "}
                      {  dayObj.cluster_duration ? (
                        dayObj.cluster_lines /
                        (dayObj.cluster_duration / 3600000)
                      ).toFixed(1) : "00" }{" "}
                    </p>
                  
                </div>
                <div>
                  <p> Odd/Case Productivity </p>
                  <p>
                    {" "}
                    :{" "}
                    {dayObj.odd_case_duration ? (
                      dayObj.odd_case_hu /
                      (dayObj.odd_case_duration / 3600000)
                    ).toFixed(1) : "00"}{" "}
                  </p>
                </div>
                <div>
                  <p> Packing Productivity </p>
                  <p>
                    {" "}
                    :{" "}
                    {dayObj.packing_duration ? (
                      dayObj.packing_orders /
                      (dayObj.packing_duration / 3600000)
                    ).toFixed(1) : "00"}{" "}
                  </p>
                </div>
              </div>
            </button>

            {/* <Dashboard_Child2_1   e={dayObj}/>  */}
          </>
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
