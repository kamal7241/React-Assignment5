import Student from '../components/student'
import {connect} from 'react-redux'
import {useEffect} from 'react'
const StudentList = ({students,filter})=>{

    console.log('in studentList',students )
    console.log('in filter',filter )
  let filterdList = students?.filter(student => {
    return student.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
  })
  console.log("filtered List",filterdList)
    if (students&&students.length) {
      return (<div className="alert">
        { filterdList.map((student,index) => {
          console.log(student.id)
          return (<Student key={student.id} index={index} studentInfo={student} />)
        })}
      </div>)
   
    }else return <h1>no Students Available</h1>

}

  // to get state from reducers in store 
  const mapStateToProps = (state) => {
    console.log("inside map state to props: ",state)
    return {
        students: state.studentReducer.list
    }
  }
  
  // connect bind component to provider to share with it store
   export default connect(mapStateToProps,null)(StudentList)