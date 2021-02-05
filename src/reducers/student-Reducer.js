

 const StudentsReducer = (state = {}, action) => {
     //state have previous data
     // reducer take action and update state then return it
    console.log('state: ', state)
    console.log('action: ', action)
    switch (action.type) {
        case 'STUDENT_LIST': return { ...state, list: action.payload }
        case 'STUDENT': return { ...state, student: action.payload }
        case 'NEW_STUDENT': return { ...state, student: action.payload }
        case 'CLEAR_STATE': return { ...state,deletedstudent:action.payload,student: action.payload }
        case 'DELETED_STUDENT': return { ...state, deletedstudent: action.payload }
        default: return state;
    }
}

export default StudentsReducer;
