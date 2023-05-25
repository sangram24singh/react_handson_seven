import React from 'react';
import {useSelector} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
const Student = () => {
    const student = useSelector((state) => state.student)
    // console.log(student)
    const Navi=useNavigate()
    // console.log(users)
    return (
        <div>
            <div className='Std-header'>
            <h1>Student Component</h1>
            <button onClick={()=>Navi('/addnewstudent')}>Add New</button>
            </div>
            
            
            
            <table border='2px' width='80%' align='center'>
<thead>
    <td>Name</td>
    <td>Age</td>
    <td>Course</td>
    <td>Batch</td>
    <td>Change</td>
</thead>
         
            {
                student.map((row,index)=>{
                    return(
                        <tr key={index}>
                            <td>{row.Name}</td>
                            <td>{row.Age}</td>
                            <td>{row.Course}</td>
                            <td>{row.Batch}</td>
                            <td> <Link to='/editstudent' state={row.id}>Edit</Link> </td>
                        </tr>
                    )
                })
            }
               </table>
        </div>
    );
}

export default Student;