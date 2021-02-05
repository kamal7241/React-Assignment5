// 1- import css Files
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'


//2- import plugins
  import 'popper.js/dist/popper'
  import 'jquery/dist/jquery'
  import 'bootstrap/dist/js/bootstrap'

  // 3-improt app component and render method
  import App from './App'
  //JSX Comiler to Dom (ReactDom)
  import {render} from 'react-dom'
   
  // render  the app in root element in index (root)
  console.log('index of Application')
  render(<App/>,document.querySelector('#root'))
