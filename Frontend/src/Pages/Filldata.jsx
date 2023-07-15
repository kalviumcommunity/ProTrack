import React, { useState , useEffect} from "react";
import "./Style/fill_data.css";
import Filldata_Box from "../Components/Filldata_Box";
import parameters from "../config";

function FillData(props) {
  const [pickerData, setPickerData] = useState([]);
  const [DataType, setDataType] = useState("Cluster");
  const [empty, setEmpty] = useState(true);
  
  let parameterCount = null ;

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    const reqbody = {
      method: "GET",
      headers: {
        "Content-Type": "application/json", "authorization" : `Bearer ${token}`
      },
    };

    fetch(`${parameters.backend_ip}/picker/getpicker`, reqbody)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPickerData(res);
      });
  }, [pickerData]);

 

  return (
    <div className="filldata_parent_div">
      <div className="filldata_side_div_left">
        <button className={ DataType == "Cluster" ? "filldata_side_div_left_btn active" : "filldata_side_div_left_btn" } onClick={(e) => {setDataType("Cluster")  }}> Cluster </button>
        <br />
        <br />
        <button className={ DataType == "Packing" ? "filldata_side_div_left_btn active" : "filldata_side_div_left_btn" } onClick={() => {setDataType("Packing")}}> Packing </button>
      </div>
      <div className="filldata_side_div"> </div>
      <div className="filldata_vertical_line"></div>

      <div className="filldata_main_div">
        { pickerData.length > 0  &&
          pickerData.map((element) => {
            return (
              <>
                {element.day.length > 0 &&
                  element.day.map((elem) => {
                    return (
                      <>
                        {elem.task_list.length > 0 &&
                          elem.task_list.map((e , idx ) => {
                            return (
                              <>
                                {e.task == DataType &&
                                  e.end_time != null &&
                                  e.work_done == 0 && (
                                  <>
                                    <Filldata_Box
                                      setPickerData={setPickerData}
                                      key={parameterCount+=1}
                                      pickerObj={element}
                                      dayObj={elem}
                                      taskObj={e}
                                      />
                                    </>
                                  )}
                              </>
                            );
                          })}
                      </>
                    );
                  })}
              </>
            );
          })}
        
      </div>

      <div className="filldata_vertical_line"></div>

      <div className="filldata_side_div_right">
        <h3>Total Entries </h3>
        <br />
        <button>{parameterCount > 0  ? parameterCount < 10 ?  `0${parameterCount}` : parameterCount : "00"}</button>
      </div>

      <div className="filldata_side_div"> </div>
    </div>
  );
}

export default FillData;
