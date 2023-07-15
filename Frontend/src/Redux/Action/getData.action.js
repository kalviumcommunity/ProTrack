import parameters from "../../config";
import ActionTypes from "../ActionTypes";
import { useSelector } from "react-redux";

function getData(dispatch) {

    const token = JSON.parse(localStorage.getItem("token"));

    let ip = parameters.backend_ip;
    const reqData = {
        method: "GET",
        headers: { "Content-Type": "application/json" , "authorization" : `Bearer ${token}` }
    };

        let data = fetch(`${ip}/picker/getpicker` , reqData )
            .then((dta) => {
                return dta.json();
            }).then((dta) => {


                dispatch(
                    {
                        type: ActionTypes.UPDATEDATA,
                        payload: dta
                    }
                )

                return dta;
            })


}


export default getData;