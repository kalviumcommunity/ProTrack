import React, { useEffect, useState } from "react";
import Dashboard_Child1 from "../Components/Dashboard_Child1";
import {useDispatch, useSelector} from 'react-redux'
import getData from "../Redux/Action/getData.action";

/////////////////////////////////////////////////    This Page is build from Home Page   ///////////////////////////////////////////////////////////////////

function Dashboard(props) {

    let pickerData = useSelector((state) => {
        return state.Pickers
    })
    
    let dispatch = useDispatch();

    useEffect(() => {
        if(pickerData.length <= 0 ){

            getData(dispatch);
        }
    }, [] )


  return (
    <div id="home_parent_box">
      <div>
        <div className="home_left_dummy_box"></div>

        <div className="home_right_box">
          {pickerData.map((elem, index) => {
            return (
              <Dashboard_Child1 pickerObj={ elem } key={index + 1} />
            );
          })}
        </div>

        <div className="home_left_box"></div>
      </div>
    </div>
  );
}

export default Dashboard;
