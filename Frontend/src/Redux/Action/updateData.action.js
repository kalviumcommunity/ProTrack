
import ActionTypes from "../ActionTypes";

function updateData ( dispatch , dta ) {

   
    dispatch(
        {
            type : ActionTypes.UPDATEDATA ,
            payload : dta
        }
    )

}


export default updateData;