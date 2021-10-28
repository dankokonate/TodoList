//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Sidebar from './Component/Sidebar';
import TodoList from './Component/TodoList';



function App() {
  const [collapse, setCollapse]=useState(false)
  return (
    <div>
      <Sidebar collapse={collapse} setCollapse={setCollapse}/>
      <TodoList/>
    </div>
  );
}

export default App;
