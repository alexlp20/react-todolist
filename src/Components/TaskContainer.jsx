import Task from "./Task";
function TaskContainer(props){
    return (
        <div className="TaskContainer" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",

            padding: "2vw",
            height: "auto",
            borderTop: "solid 2px rgb(29, 29, 29)",
            
        }}>  
            <div className="toDoTaskContainer" style={{width: "100%"}}>
                <div className="createTaskContainer">
                    <input style={{
                        backgroundColor: "rgb(20, 20, 20)", 
                        border: "none", 
                        color: "var(--secondLower)"
                            }} placeholder="Enter a task..." type="text" value={props.taskContent} 
                            onChange={
                                /* i access to the input content every time its updated, and update taskContent*/
                                (e) => {props.setTaskContentFunction(e.target.value)}
                                }/>
                    <button id="addBtn" onClick={() => props.addTaskFunction(props.taskContent)} style={{
                        fontWeight: "600",
                    }}>Add Task</button>
                </div>
                {props.tasks.map((task) => {if(task.tab === props.currentTab) {return <Task title={task.content} deleteFunction={() => {props.deleteTaskFunction(task)}}/>}})}
            </div>        
        </div>         
    );
}

export default TaskContainer;