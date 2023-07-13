import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import Filldata from '../Pages/Filldata';
import Task from '../Pages/Task';
import Add_picker from '../Pages/Add_picker';

function AllRoutes(props) {
    return (
        <>
            <Routes>
                <Route path='/home'  element={<Home/>}> </Route>
                <Route path='/dashboard'  element={<Dashboard/>}  ></Route>
                <Route path='/fill' element={<Filldata/>}></Route>
                <Route path='/task' element={<Task/>}></Route>
                <Route path='/addpicker' element={<Add_picker/>}></Route>
                
            </Routes>


            
        </>
    );
}

export default AllRoutes;