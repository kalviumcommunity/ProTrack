import parameters from "../../config";
import ActionTypes from "../ActionTypes";

function getData ( dispatch  ) {

    let ip = parameters.backend_ip;

    let data =  fetch( `${ip}/picker/getpicker`)
                .then((dta)=> {
                    return dta.json();
                }).then((dta) => {

                    
                    dispatch(
                        {
                            type : ActionTypes.UPDATEDATA ,
                            payload : dta
                        }
                    )

                    return dta ;
                })
    



}


export default getData;