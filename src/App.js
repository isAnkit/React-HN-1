import './App.css';
import React,{useState} from 'react'
import FunctionComponent from './Component/FunctionComponent'
import ClassComponent from './Component/ClassComponent'


function App() {
  const [fClick,funcClick]=useState(false);
  const [cClick,classClick]=useState(false);

  return(
    <div className='main'>
      <h1>Styling Using Functional And Class Component</h1>
      <button className='firstbtn' onClick={()=>funcClick(true)}>To see styling in functional component</button>
      <button className='secondbtn' onClick={()=>classClick(true)}>To see styling in class component</button>
       <div className='container'>
    {
      fClick && <FunctionComponent/>
    }
    {
      cClick && <ClassComponent/>
    }
    </div>
    </div>
  )
}

export default App;
