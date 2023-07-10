import Pickers from "../../Data/Pickers"
import ActionTypes from "../ActionTypes";
let initialState = {
    Pickers : []
}

let  Reducer = (state = initialState , action ) => {

    if (action.type ==  ActionTypes.UPDATEDATA ) {
        return {
            ...state , Pickers :  action.payload
        }
    }

    return state;
}

export default Reducer;