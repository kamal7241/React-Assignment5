import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'
import { getAllStudents } from '../actions'
import StudentList from './student-list'
import Search from '../components/search'
// import * as actions from '../actions'
const Home = (props) => {
  console.log("inside Home : ",props)
  let {getAllStudents,match} = props
  // filterKey to filter list of students in student list
  let [filterKey,setFilterKey]= useState('');
  useEffect(() => {
    // effect will be called just in mount
    console.log('in mount' ,getAllStudents)
    console.log('in mount' ,match)
    getAllStudents();
    return () => {
      console.log('in Unmount Home')
      // cleanup
    }
  }, [match])

  let updateFilterKey= (key)=>{
    setFilterKey(key)
  }
  return (
    <div>
      <Search onSearch ={updateFilterKey} />
      {/* send filter key to filter in student list */}
      <StudentList filter ={filterKey}/>
    </div>
  )
}

// no get , fireing actions only
const mapDispatchToProps=(dispatch)=>{
  console.log('insdie map dispatch to Prps')
  let ret =bindActionCreators({getAllStudents},dispatch)
  console.log(ret)
  console.log(getAllStudents)
  return  ret
}

// const mapStateToProps = (state) => {
//   console.log("inside map state to props: ",state)
//   return {
//       students: state.studentReducer.list
//   }
// }
// connect Home with actions and Provider
// continer >> provider >> component
 export default connect(null,mapDispatchToProps)(Home)

