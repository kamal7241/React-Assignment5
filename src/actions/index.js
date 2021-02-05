
const BASE_URL = "http://localhost:3001"
const requestOptions = {
    // *GET, POST, PUT, DELETE, etc.
    method: 'GET',
}
const postOptions = {
    // *GET, POST, PUT, DELETE, etc.
    method: 'POST',
    // Adding body or contents to send 
    body: JSON.stringify({
        name: "foo",
        age: 30,
    }),
    // no-cors, *cors, same-origin
    // mode: 'cors', 
    //  // *default, no-cache, reload, force-cache, only-if-cached
    // cache: 'no-cache',
    //  // include, *same-origin, omit
    // credentials: 'same-origin',
    headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json'
    }
}

const requestDeleteOptions = {
    // *GET, POST, PUT, DELETE, etc.
    method: 'DELETE',
}

export const getAllStudents =async () =>{
    console.log('inside reducer get All Students')
        let payload;
    try{
        let res = await fetch(`${BASE_URL}/students`,requestOptions)
         payload = await res.json();
       
    }catch(err){
        console.log(err)
    }
    console.log("response",{type:'STUDENT_LIST',payload})
    return  {type:'STUDENT_LIST',payload}

}

export const addNewStudent = async(student)=>{
    postOptions.body =JSON.stringify(student)
    let payload;
    try{
        let res = await fetch(`${BASE_URL}/students`,postOptions)
        payload = await res.json();
    }catch(err){
        console.log(err)
    }
    console.log("response",{type:'NEW_STUDENT',payload})
    return {type:'NEW_STUDENT',payload}
}

export const getStudentById = async (id)=>{

    let payload;
    try{
        let res = await fetch(`${BASE_URL}/students/${id}`)
        payload = await res.json();
    }catch(err){
        console.log(err)
    }

    console.log("response",{type:'STUDENT',payload})
    return {type:'STUDENT',payload};
}

export const deleteStudentById = async(id)=>{
    let payload;
    try{
        let res = await fetch(`${BASE_URL}/students/${id}`,requestDeleteOptions)
        payload = await res.json();
    }catch(err){
        console.log(err)
    }
    console.log("response",{type:'DELETED_STUDENT',payload})
    return {type:'DELETED_STUDENT',payload}
}

export const clearStudentState = async ()=>{

    console.log("response",{type:'CLEAR_STATE',payload:null})
    return {type:'CLEAR_STATE',payload:null};
}
