import { Link } from "react-router-dom";

const Student = (props)=>{
    console.log("student",props)
    let {index,studentInfo} = props;
    
    return (
        <Link to={`/student/${studentInfo.id}`} className=" nav-link   alert alert-dark" >
              <p className="h3">Student: {index+1}</p>
            <div>
            <p className="h3">Name: {studentInfo.name}</p>
            <p className="h5 text-muted">age: {studentInfo.age}</p>
            <p className="h5 text-muted">phone: {studentInfo.phone}</p>
            </div>
          
           
        </Link>
    )
}

export default Student;