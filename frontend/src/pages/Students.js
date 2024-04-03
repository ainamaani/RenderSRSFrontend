import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        const fetchStudents = async() =>{
            try {
                const response = await axios.get('http://localhost:4555/api/registration/students');
                if(response.status === 200){
                    console.log(response.data);
                    setStudents(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchStudents();
    },[])
    return ( 
        <div>
            <Link to={"/register"}>Register Student</Link>
            <h3 style={{
                fontSize: "1.5em",
                textAlign: "center"
            }}>Student list</h3>
            { students ? (
                students.map((student)=>(
                    <div style={{
                        background: "#fff",
                        borderRadius: "4px",
                        padding: "10px",
                        margin: "5px"
                    }}>
                        <h3><strong>Student Name: </strong>{student.studentName}</h3>
                        <p><strong>Student Number: </strong>{student.studentNumber}</p>
                        <p><strong>Course: </strong>{student.course}</p>
                    </div>
                ))
            ):(
                <p>Loading.......</p>
            ) }
        </div>
     );
}
 
export default Students;