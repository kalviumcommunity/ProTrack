import React from 'react';
import { useSelector } from 'react-redux';

function ManpowerStatus({task_list , Shift_list }) {

    let manpowerStatus = { 
        first_cluster : 0,
        first_packing : 0,
        first_oddcase : 0,
        first_absent : 0,
        first_break :0,
        first_other :0,
        first_notask :0,
    
        second_cluster : 0,
        second_packing : 0,
        second_oddcase : 0,
        second_absent : 0,
        second_break :0,
        second_other :0,
        second_notask :0,
    
        night_cluster : 0,
        night_packing : 0,
        night_oddcase : 0,
        night_absent : 0,
        night_break :0,
        night_other :0,
        night_notask :0,
    
       }

       let Pickers = useSelector( (state ) => {
        return state.Pickers;
      } )

       if (Pickers.length > 0) {

        Shift_list.forEach((shift) => {
            task_list.forEach((task) => {

                let  TL = Pickers.filter((elem) => {
                    return elem.shift == shift && elem.current_task == task;
                  });
             
                  if (shift == "First Shift"){
                    switch( task ){
                      case "No Task"  : manpowerStatus.first_notask  = TL.length  ; break;
                      case "Cluster"  : manpowerStatus.first_cluster  = TL.length  ; break;
                      case "Packing"  : manpowerStatus.first_packing  = TL.length  ; break;
                      case "Odd/Case" : manpowerStatus.first_oddcase  = TL.length  ; break;
                      case "Absent"   : manpowerStatus.first_absent  = TL.length  ; break;
                      case "Break"    : manpowerStatus.first_break  = TL.length  ; break;
                      case "Other"    : manpowerStatus.first_other  = TL.length  ; break;
                    }
                  }else if (shift == "Second Shift"){
                    switch( task ){
                      case "No Task"  : manpowerStatus.second_notask   = TL.length  ; break;
                      case "Cluster"  : manpowerStatus.second_cluster  = TL.length  ; break;
                      case "Packing"  : manpowerStatus.second_packing  = TL.length  ; break;
                      case "Odd/Case" : manpowerStatus.second_oddcase  = TL.length  ; break;
                      case "Absent"   : manpowerStatus.second_absent  = TL.length  ; break;
                      case "Break"    : manpowerStatus.second_break  = TL.length  ; break;
                      case "Other"    : manpowerStatus.second_other  = TL.length  ; break;
                    }
                  }else if (shift == "Night Shift"){
                    switch( task ){
                      case "No Task"  : manpowerStatus.night_notask  = TL.length  ; break;
                      case "Cluster"  : manpowerStatus.night_cluster  = TL.length  ; break;
                      case "Packing"  : manpowerStatus.night_packing  = TL.length  ; break;
                      case "Odd/Case" : manpowerStatus.night_oddcase  = TL.length  ; break;
                      case "Absent"   : manpowerStatus.night_absent  = TL.length  ; break;
                      case "Break"    : manpowerStatus.night_break  = TL.length  ; break;
                      case "Other"    : manpowerStatus.night_other  = TL.length  ; break;
                    }
                  }

            })
        })
        
       }

    let firstTotal = manpowerStatus.first_notask + manpowerStatus.first_cluster + manpowerStatus.first_packing + manpowerStatus.first_oddcase +  manpowerStatus.first_absent + manpowerStatus.first_break +  manpowerStatus.first_other
    let secondTotal = manpowerStatus.second_notask + manpowerStatus.second_cluster + manpowerStatus.second_packing + manpowerStatus.second_oddcase +  manpowerStatus.second_absent + manpowerStatus.second_break +  manpowerStatus.second_other
    let nightTotal = manpowerStatus.night_notask + manpowerStatus.night_cluster + manpowerStatus.night_packing + manpowerStatus.night_oddcase +  manpowerStatus.night_absent + manpowerStatus.night_break +  manpowerStatus.night_other

    return (
        <div>

<div className="manpower_heading">
            <h3>Manpower Status</h3>
          </div>
          <div className="manpower_table">
            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th colSpan="3">Shift</th>
                </tr>
                <tr>
                  <td></td>
                  <td>First</td>
                  <td>Second</td>
                  <td>Third</td>
                </tr>
              </thead>
              <tbody className="manpower_table_body">
                <tr>
                  <th>Total</th>
                  <th>{ firstTotal < 10 ? "0" + firstTotal : firstTotal  }</th>
                  <th>{ secondTotal < 10 ? "0" + secondTotal : secondTotal  }</th>
                  <th>{ nightTotal < 10 ? "0" + nightTotal : nightTotal  }</th>
            
                </tr>

                <tr>
                  <td>Cluster</td>
                  <td>{ manpowerStatus.first_cluster < 10 ? "0" + manpowerStatus.first_cluster : manpowerStatus.first_cluster  }</td>
                  <td> { manpowerStatus.second_cluster < 10 ? "0" + manpowerStatus.second_cluster : manpowerStatus.second_cluster  } </td>
                  <td>{ manpowerStatus.night_cluster < 10 ? "0" + manpowerStatus.night_cluster : manpowerStatus.night_cluster  }</td>
                </tr>

                <tr>
                  <td>Packing</td>
                  <td>{ manpowerStatus.first_packing < 10 ? "0" + manpowerStatus.first_packing : manpowerStatus.first_packing  }</td>
                  <td> { manpowerStatus.second_packing < 10 ? "0" + manpowerStatus.second_packing : manpowerStatus.second_packing  } </td>
                  <td>{ manpowerStatus.night_packing < 10 ? "0" + manpowerStatus.night_packing : manpowerStatus.night_packing  }</td>
                </tr>

                <tr>
                  <td>Odd/Case</td>
                  <td>{ manpowerStatus.first_oddcase < 10 ? "0" + manpowerStatus.first_oddcase : manpowerStatus.first_oddcase  }</td>
                  <td> { manpowerStatus.second_oddcase < 10 ? "0" + manpowerStatus.second_oddcase : manpowerStatus.second_oddcase  } </td>
                  <td>{ manpowerStatus.night_oddcase < 10 ? "0" + manpowerStatus.night_oddcase : manpowerStatus.night_oddcase  }</td>
                </tr>

                <tr>
                  <td>Absent</td>
                  <td>{ manpowerStatus.first_absent < 10 ? "0" + manpowerStatus.first_absent : manpowerStatus.first_absent  }</td>
                  <td> { manpowerStatus.second_absent < 10 ? "0" + manpowerStatus.second_absent : manpowerStatus.second_absent  } </td>
                  <td>{ manpowerStatus.night_absent < 10 ? "0" + manpowerStatus.night_absent : manpowerStatus.night_absent  }</td>
                </tr>

                <tr>
                  <td>Break</td>
                  <td>{ manpowerStatus.first_break < 10 ? "0" + manpowerStatus.first_break : manpowerStatus.first_break  }</td>
                  <td> { manpowerStatus.second_break < 10 ? "0" + manpowerStatus.second_break : manpowerStatus.second_break  } </td>
                  <td>{ manpowerStatus.night_break < 10 ? "0" + manpowerStatus.night_break : manpowerStatus.night_break  }</td>
                </tr>

                <tr>
                  <td>Other</td>
                  <td>{ manpowerStatus.first_other < 10 ? "0" + manpowerStatus.first_other : manpowerStatus.first_other  }</td>
                  <td> { manpowerStatus.second_other < 10 ? "0" + manpowerStatus.second_other : manpowerStatus.second_other  } </td>
                  <td>{ manpowerStatus.night_other < 10 ? "0" + manpowerStatus.night_other : manpowerStatus.night_other  }</td>
                </tr>

                <tr>
                  <td>No Task</td>
                  <td>{ manpowerStatus.first_notask < 10 ? "0" + manpowerStatus.first_notask : manpowerStatus.first_notask  }</td>
                  <td> { manpowerStatus.second_notask < 10 ? "0" + manpowerStatus.second_notask : manpowerStatus.second_notask  } </td>
                  <td>{ manpowerStatus.night_notask < 10 ? "0" + manpowerStatus.night_notask : manpowerStatus.night_notask  }</td>
                </tr>
              </tbody>
            </table>
          </div>
            
        </div>
    );
}

export default ManpowerStatus;