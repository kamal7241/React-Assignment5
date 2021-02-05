import React, { useState,useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import {addNewStudent} from '../actions'
const AddStudent = (props) => {
  let {buttonLabel,className,addClickState,addNewStudent}= props
  console.log('inside add student component:')
  let history = useHistory();
  // control toggle by modal state
  const [modal, setModal] = useState(false);
  // on click to toggle
  const toggle = () =>{
    setModal(!modal);
    addClickState=false;
  } 
  // on mount or update
  useEffect(() => {
    console.log("mount and Update",addClickState)
    if(addClickState)toggle();
    return () => {
    console.log("unmount",addClickState)
    }
  }, [addClickState])
  
   let [name,setName]= useState({value:'',class:'',pattern:/^\D{5,}$/gim});
   let [age,setAge]= useState({value:'',class:''});
   let [phone,setPhone]= useState({value:'',class:'',pattern:/^0\d{10}$/gim});
   let [isDisabled,setIsDisabled]= useState(true);

   // on click add
  const addStudent = ()=>{
    let student = {name:name.value,age:age.value,phone:phone.value}
    addNewStudent(student);
  }


  // on change Name Input
  const updateName=(e)=>{
    console.log(e.target.value)
    if((name.pattern.test(e.target.value))){
      console.log('inside if:')
      setName({value:e.target.value,class:'is-valid',pattern:/^\D{5,}$/gim}); 
      if(age.class=="is-valid"&&phone.class=="is-valid")
      setIsDisabled(false)
    }else {
      console.log('inside else:')
      setName({value:e.target.value,class:'is-invalid',pattern:/^\D{5,}$/gim}); 
      setIsDisabled(true)

    }
    

  }
  //on change age input
  const updateAge=(e)=>{
    if((e.target.value<=60 && e.target.value>=18)){
      console.log('inside if:')
      setAge({value:e.target.value,class:'is-valid'}); 
      if(name.class=="is-valid" &&phone.class=="is-valid")
      setIsDisabled(false)

    }else {
      console.log('inside else:')
      setAge({value:e.target.value,class:'is-invalid'}); 
      setIsDisabled(true)
      

    }
  }
  // on change phone input
  const updatePhone=(e)=>{
    if((phone.pattern.test(e.target.value))){
      console.log('inside if:')
      setPhone({value:e.target.value,class:'is-valid',pattern:/^0\d{10}$/gim}); 
      if(name.class=="is-valid" && age.class=="is-valid")
      setIsDisabled(false)

    }else {
      console.log('inside else:')
      setPhone({value:e.target.value,class:'is-invalid',pattern:/^0\d{10}$/gim}); 
      setIsDisabled(true)

    }
  }
  // on close
  const reloadHome = ()=>{
    history.push("/")
    toggle();
  }

  return (
    <div>
       { console.log('new add student render')  }
       { console.log('new add student render')  }
      <Modal isOpen={modal} toggle={toggle}backdrop="false"  className={className}>
        <ModalHeader toggle={toggle}>Add New Student</ModalHeader>
        <ModalBody className="w-75 mx-auto">
          <div className="form-group">
            <input  value={name.value} onChange={updateName} className={`form-control ${name.class}`} placeholder="name" />
          </div>
          <div className="form-group ">
            <input value={age.value}  onChange={updateAge} className={`form-control ${age.class}`} placeholder="age" />
          </div>
          <div className="form-group ">
            <input value={phone.value} onChange={updatePhone} className={`form-control ${phone.class}`} placeholder="phone" />
          </div>
        </ModalBody>
        <ModalFooter className="justify-content-start">
          <Button color="primary" disabled={isDisabled}  onClick={addStudent}>Add</Button>
          <Button color="danger" onClick={reloadHome}>close</Button>
          <Button className="ml-auto" color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const  mapDispatchToProps=(dispatch)=>{

  return bindActionCreators({addNewStudent},dispatch)

}

export default connect(null,mapDispatchToProps)(AddStudent) ;
