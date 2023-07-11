import React, { useState , useEffect} from "react";
import "./Style/fill_data.css";
import Filldata_Box from "../Components/Filldata_Box";
import parameters from "../config";

function FillData(props) {
  const [pickerData, setPickerData] = useState([]);
  const [DataType, setDataType] = useState("Cluster");
  const [empty, setEmpty] = useState(true);
  
  let parameterCount = null ;

  useEffect(() => {
    const reqbody = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${parameters.backend_ip}/picker/getpicker`, reqbody)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPickerData(res);
      });
  }, []);

 

  return (
    <div className="filldata_parent_div">
      <div className="filldata_side_div_left">
        <button onClick={() => {setDataType("Cluster")}}> Cluster </button>
        <br />
        <br />
        <button onClick={() => {setDataType("Packing")}}> Packing </button>
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
        <button>{parameterCount}</button>
      </div>

      <div className="filldata_side_div"> </div>
    </div>
  );
}

export default FillData;
