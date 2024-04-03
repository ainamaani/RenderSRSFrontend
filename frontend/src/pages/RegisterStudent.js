import React,{useState} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const RegisterStudent = () => {
    const [studentName, setStudentName] = useState('');
    const [studentNumber, setStudentNumber] = useState('');
    const [course, setCourse] = useState('');

    const handleRegisterStudent = async(e) =>{
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:4555/api/registration/register",
                                    JSON.stringify({ studentName,studentNumber,course }),{
                                        headers:{
                                            'Content-Type' : 'application/json'
                                        }
                                    }
            
            )
            if(response.status === 200){
                console.log("Student registered successfully", response.data);
                setStudentName('');
                setStudentNumber('');
                setCourse('');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return ( 
        <div style={{
            background: "#fff",
            borderRadius: "6px",
            padding: "10px",

        }}> 
            <Link to={"/students"}>View Students</Link>
            <h4>Register student</h4>
            <form onSubmit={handleRegisterStudent}>
                <label htmlFor="">Student name</label>
                <input 
                    type="text"
                    value={studentName}
                    onChange={(e)=>{setStudentName(e.target.value)}}
                />
                <label htmlFor="">Student number</label>
                <input 
                    type="text"
                    value={studentNumber}
                    onChange={(e)=>{setStudentNumber(e.target.value)}}
                />
                <label htmlFor="">Course</label>
                <input 
                    type="text"
                    value={course}
                    onChange={(e)=>{setCourse(e.target.value)}}
                />
                <button type="submit">Register</button>
            </form>
        </div>
     );
}
 
export default RegisterStudent;