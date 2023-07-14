import React, { useState } from 'react';
import './Style/model.css'
import { useSelector } from 'react-redux';

function Model({toggleShift, changeTask , modelState , setModelState}) {

    const [val , setVal] = useState(modelState.initialValue);

    function sendData(){

        setModelState({
            ...modelState,
            modelValue : val,
            state : false
        })
        if(modelState.nextFunction == "toggleShift"){
            toggleShift(val);
        }else{
            changeTask( modelState.task , val )
        }
       

    }

    function cancelModel () {
         setModelState({
            ...modelState,
            modelValue : val,
            state : false
        })
    }

   

    return (
        <div className='model_parent_div'>
            <p> { modelState.message }</p>
            <input className='input_model' type="text" onChange={ (e) => { setVal(e.target.value)} } id='model_input_box' placeholder={modelState.placeHolderValue} />
            <br />
            <div className='model_submit_buttons'>
                <button className='button' onClick={sendData}>Submit</button>
                <button className='button' onClick={cancelModel}>Cancel</button>
            </div>
           
        </div>
    );
}

export default Model;