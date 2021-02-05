// app Routing 
//provider 
import { Provider } from 'react-redux';
// BrowserRouter 
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {applyMiddleware,createStore} from 'redux'
import promiseMW from 'redux-promise'
import reducers from './reducers'


// components
import Home from './containers/homeComponent'
import StudentDetails from './containers/student-details';
import NotFound from './components/not-found';
import Header from './components/header';
import AddStudent from './containers/add-student';
import { useState } from 'react';
// import { useState,useEffect } from 'react';

const createStoreWithMW = applyMiddleware(promiseMW)(createStore);
console.log('applyMiddleWare: ',applyMiddleware)// take middleware and add it to list of MiddleWares
console.log('promiseMw: ',promiseMW)// to deal with promise return of reducers
console.log('createStore: ',createStore)//take reducer
 const App = (props)=>{
   console.log("App component:",props)
  let [isOpen,setIsOpen] = useState(0)

  // useEffect(() => {
  //   console.log("mount in App")
  //   setIsOpen(isOpen);
  //   return () => {
  //     // cleanup
  //   }
  // }, [isOpen])

  // notify Modal send isOpen as a number 
  // evey time header add  btn clicked >> is open increase by i
  // modal check if isopen not false (0,undefined,null) it would toggle
  //initial case for isopen is zero to prevent Modal from open
  const notifyModal = ()=>{
    console.log("notify",isOpen)
    setIsOpen(++isOpen);
   }
      return (
        // The <Provider /> makes the Redux store available to any nested components that have been 
        // wrapped in the connect() function.
        <Provider store={createStoreWithMW(reducers)}>{console.log('render of provider')}
  <BrowserRouter>
        {/* header component toggle Modal in Add student Component */}
         <Header onToggle ={notifyModal}  />
         {/* add student have Modal component  */}
         <AddStudent addClickState={isOpen}/>
            <div className="container">
          <Switch>
          <Route path='/student/:id' component={StudentDetails}/>
            <Route exact path="/" component={Home}/>
            <Route path='*' component = {NotFound} />
          </Switch>
            </div>
          </BrowserRouter>
        </Provider>
      )

 }

 export default App;


//  import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Home from './components/home'
// import CarDetails from './containers/car-details'
// import NotFound from './components/not-found'
// import { Provider } from 'react-redux'
// import { applyMiddleware, createStore } from 'redux';
// import reducers from './reducers'
// import promiseMW from 'redux-promise';
// const createStoreWithMW = applyMiddleware(promiseMW)(createStore)
// const App = () => {
//     return (
//         <Provider store={createStoreWithMW(reducers)}>
//             <BrowserRouter>
//                 <div className="conatainer">
//                     <div className="row">
//                         <div className="col">
//                             <Switch>
//                                 <Route exact path="/" component={Home} />
//                                 <Route path="/cars/:id" component={CarDetails} />
//                                 <Route path="*" component={NotFound} />
//                             </Switch>
//                         </div>
//                     </div>
//                 </div>
//             </BrowserRouter>
//         </Provider>
//     )
// }
// export default App

// function x(){
//     return function y(){

//         return function z(){

//         }
//     }
// }

// let fn = x()()
// fn()
