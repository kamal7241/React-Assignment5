import React, { useEffect,useState } from 'react';
import {getStudentById,deleteStudentById,clearStudentState} from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
const StudentDetails = (props)=>{
    let {history,match,studentInfo,getStudentById,deleteStudentById,deletedStudent,clearStudentState} = props
    console.log('props',props)

    let [fade,setFade] =useState('fade');
    useEffect(()=>{
        console.log('mount ',match.params.id)
        getStudentById(match.params.id)
        if(deletedStudent){
            alert('deleted')
            history.push('/')
        } 
        return ()=>{
            clearStudentState()
            console.log('Unmount studentDetails')
        }
    },[deletedStudent])

    const showConfirmation=()=>{
        setFade('')
    }
    const fadeConfirmation=()=>{
        setFade('fade')
    }

    const deleteStudent = ()=>{
        deleteStudentById(studentInfo.id)

    }
    if(studentInfo){
    return (
        <div className="alert">
        {console.log('render')}
        <p className="h1 text-center text-secondary border border-secondary  rounded">Student Details</p>
        <div className="alert alert-secondary">
            <p className="h3">Name: {studentInfo.name}</p>
            <p className="h5 text-muted">age: {studentInfo.age}</p>
            <p className="h5 text-muted">phone: {studentInfo.phone}</p>
            <button className='btn btn-danger my-1' onClick={showConfirmation}>delete</button>
            </div>
            <div className={`alert ${fade} alert-danger w-50 m-auto`}>
                <p className="h3 text-center">Are u Sure</p>
                <div className='d-flex justify-content-center'>
                <button className="btn btn-primary mx-3"onClick={deleteStudent}>yes</button>
                <button className="btn btn-secondary mx-3 "onClick={fadeConfirmation}>cancel</button>
                </div>
            </div>
        </div>
    )}else return (<h1>{console.log('render')}Please Wait ...</h1>)
}
// no get , fireing actions only
const mapDispatchToProps=(dispatch)=>{
    console.log('insdie map dispatch to Prps')
    let ret =bindActionCreators({getStudentById,deleteStudentById,clearStudentState},dispatch)
    console.log(ret)
    console.log(getStudentById)
    return  ret
  }
  
  const mapStateToProps = (state) => {
    console.log("inside map state to props: ",state)
    return {
        deletedStudent: state.studentReducer.deletedstudent,
        studentInfo: state.studentReducer.student
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(StudentDetails);

