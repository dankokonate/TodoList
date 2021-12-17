//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Sidebar from './Component/Sidebar';
import TodoList from './Component/TodoList';
import { AiOutlineMenu } from "react-icons/ai";



function App() {
  const [collapse, setCollapse]=useState(false)
  return (
    <div className='contenaire'>
      <div className='navbar'>
        <AiOutlineMenu onClick={() => setCollapse(!collapse)} style={{ marginLeft: '2rem', fontSize: '2rem', background: 'none', color: 'white' }} />
      </div>
      
      <div className='sideBar' style={{display:'flex', justifyContent:'space-between'}}>
        <Sidebar collapse={collapse} setCollapse={setCollapse}/>

        <div className='todoList'>
         <TodoList/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
