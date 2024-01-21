const ShowTask = ({taskList,setTaskList,updateTask,setUpdateTask}) => {
  const deleteHandle=(id)=>{
    const deleteTask=taskList.filter((values)=>(
      values.id!==id
    ))
    console.log(deleteTask);
    setTaskList(deleteTask);
  }

  const updateHandle =(id)=>{
    const UpdateTask = taskList.find((values)=>(
      values.id ===id
    ))
    console.log(UpdateTask);
    setUpdateTask(UpdateTask);
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button onClick={()=>setTaskList([])} className="clearAll" >Clear All</button>
      </div>
      <ul>
        {taskList && taskList.map(task => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i  onClick={()=>updateHandle(task.id)} className="bi-pencil-square"></i>
            <i onClick={()=>deleteHandle(task.id)} className="bi-trash"></i>
          </li>
        ))}

      </ul>
    </section>
  )
}
export default ShowTask;