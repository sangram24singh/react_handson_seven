import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {  useNavigate } from 'react-router-dom';
import { userAdded } from '../store/StudentDataSlice';
const AddNew = () => {
    const navi=useNavigate()
    
    const data=useSelector((state)=>state.student);
    console.log(data)
    const[Name,setName]=useState("");
    const[Age,setAge]=useState("");
    const[Course,setCourse]=useState("");
    const[Batch,setBatch]=useState("");
    const dispatch=useDispatch();
const onCancel=()=>{
    navi(-1)
}
const handleSubmit=()=>{
if(Name && Age && Course && Batch){
    dispatch(userAdded({
        
        'Name':Name,
        'Age':Age,
        'Course':Course,
        'Batch':Batch,
        'id':data.length,

    }))
}
    navi(-1)

}

    return (
        <div>
            <input type="text" name='name' value={Name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
            <input type="text" name='age'value={Age} placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)} />
            <br />
            <input type="text" name='course' value={Course} placeholder='Enter Course' onChange={(e)=>setCourse(e.target.value)} />
            <input type="text" name='batch' value={Batch} placeholder='Enter Batch' onChange={(e)=>setBatch(e.target.value)} />
            <br />
         
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={onCancel}>Cancel</button>
            
            
        </div>
    );
}

export default AddNew;