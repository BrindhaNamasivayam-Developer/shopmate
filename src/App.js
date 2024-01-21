import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [userInput,setUserInput]=useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const[userList,setUserList] = useState({});

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(userInput))
  },[userInput])
  return (
    <div className="App">
      <Header />
      <AddTask 
      taskList={userInput} 
      setTaskList={setUserInput} 
      updateTask={userList} 
      setUpdateTask={setUserList} />

      <ShowTask taskList={userInput} 
      setTaskList={setUserInput} 
      updateTask={userList} 
      setUpdateTask={setUserList}/>
    </div>
  );
}

export default App;
