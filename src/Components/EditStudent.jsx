import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { userUpdated } from '../store/StudentDataSlice';
const EditStudent = () => {
    const dispatch=useDispatch()
    const data=useLocation()
    const dataid=data.state;
    const stdDetails=useSelector((state)=>state.student.filter((item)=>item.id==dataid))
    console.log(dataid);
const stdName=stdDetails[0].Name;
const stdAge=stdDetails[0].Age;
const stdCourse=stdDetails[0].Course;
const stdBatch=stdDetails[0].Batch
console.log(stdName)
const [Name,setName]=useState(stdName)
const[Age,setAge]=useState(stdAge)
const[Course,setCourse]=useState(stdCourse)
const[Batch,setBatch]=useState(stdBatch)

const SubmitHandler=()=>{
    if(Name && Age && Course && Batch){
        dispatch(userUpdated({
            'Name':Name,
            'Age':Age,
            'Course':Course,
            'Batch':Batch,
            'id':dataid
        }))
        navi(-1)
    }
}
    const navi=useNavigate()
    const OnCancel=()=>{
        navi(-1)
    }
    // console.log(users)
    return (
        <div>
             <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" value={Age} onChange={(e)=>setAge(e.target.value)} />
            <br />
            <input type="text" value={Course} onChange={(e)=>setCourse(e.target.value)}    />
            <input type="text" value={Batch} onChange={(e)=>setBatch(e.target.value)} />
            <br />
            <button onClick={SubmitHandler}>Update</button>
            <button onClick={OnCancel} >Cancel</button>
        </div>
    );
}

export default EditStudent;