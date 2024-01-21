const AddTask = ({ taskList, setTaskList, updateTask, setUpdateTask }) => {

    const inputHandler = (event) => {
        event.preventDefault();
        if (updateTask.id) {
             const updateDate = new Date();
            const dataUpdated = taskList.map((values)=>(
                values.id===updateTask.id ? {id:updateTask.id,name:updateTask.name,time:`${updateDate.toLocaleDateString()} ${updateDate.toLocaleTimeString()}`}
                :values                           
            ))      
            setTaskList(dataUpdated); 
            setUpdateTask({});
        }
        else {
            const date = new Date();
            console.log(date);
            const enterList = {
                id: date.getTime(),
                name: event.target.task.value,
                time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
            }
            setTaskList([...taskList, enterList]);
            setUpdateTask({});
        }
       
    }

    return (
        <section className="addTask">
            <form className="form" onSubmit={inputHandler}>
                <input type="text" name="task" value={updateTask.name || ""} onChange={(e)=>{setUpdateTask({...updateTask,name:e.target.value})}} autoComplete="off" placeholder="add task" maxLength="25"></input>
                <button className="button" type="submit">{updateTask.id ? "Update":"ADD"}</button>
            </form>
        </section>
    )
}

export default AddTask;