import React, { useState } from "react";
import Dashboard_Child2 from "./Dashboard_Child2";

function Dashboard_Child1({ pickerObj }) {
  const [showShift, setShowShift] = useState(false);

  return (
    <>
      <ul>
        <li style={{ paddingLeft: ".3rem" }}>
          <button
            className="home_button_shift"
            onClick={() => {
              setShowShift(!showShift);
            }}
          >
           {pickerObj.name}
          </button>
          {showShift && (
            <ul className="ul_nested_shift">
              {pickerObj.day.map((dayObj, index) => {
                return <Dashboard_Child2 dayObj={dayObj} key={index + 1} />;
              })}
            </ul>
          )}
        </li>
      </ul>
    </>
  );
}

export default Dashboard_Child1;
