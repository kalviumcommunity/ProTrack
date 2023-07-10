import React from 'react';
import "./Style/home.css";
// import Shift_box from "../Components/Shift_box";

function Home(props) {
    return (
        <div id="home_parent_box">
        
      <div>
      <div className="home_left_box">
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
                  <th>34</th>
                  <th>27</th>
                  <th>32</th>
                </tr>

                <tr>
                  <td>Cluster</td>
                  <td>34</td>
                  <td>27</td>
                  <td>32</td>
                </tr>

                <tr>
                  <td>Packing</td>
                  <td>34</td>
                  <td>27</td>
                  <td>32</td>
                </tr>

                <tr>
                  <td>Odd/Case</td>
                  <td>34</td>
                  <td>27</td>
                  <td>32</td>
                </tr>

                <tr>
                  <td>Leave</td>
                  <td>34</td>
                  <td>27</td>
                  <td>32</td>
                </tr>

                <tr>
                  <td>Break</td>
                  <td>34</td>
                  <td>27</td>
                  <td>32</td>
                </tr>

                <tr>
                  <td>Other</td>
                  <td>34</td>
                  <td>27</td>
                  <td>32</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> 

        <div className="home_left_dummy_box"></div>

        {/* <div className="home_right_box">
          {Shift_list.map((elem, index) => {
            return <Shift_box   shift={elem} key={index + 1} />;
          })}
        </div> */}
      </div>
    </div>
    );
}

export default Home;