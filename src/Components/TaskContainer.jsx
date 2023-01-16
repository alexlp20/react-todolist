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
                        width: "76%", 
                        height: "3vw", 
                        fontSize: "1vw",
                        backgroundColor: "rgb(20, 20, 20)", 
                        border: "none", 
                        borderRadius: "0.4em",
                        paddingInline: "1em",
                        color: "var(--secondLower)"
                            }} placeholder="Enter a task..." type="text" value={props.taskContent} 
                            onChange={
                                /* i access to the input content every time its updated, and update taskContent*/
                                (e) => {props.setTaskContentFunction(e.target.value)}
                                }/>
                    <button id="addBtn" onClick={() => props.addTaskFunction(props.taskContent)} style={{
                        marginInlineStart: "1em",
                        width: "20%",
                        height: "3vw",
                        borderRadius: "0.5em",
                        fontWeight: "600",
                        fontSize: "1vw",
                    }}>Add Task</button>
                </div>
                {props.tasks.map((task) => {return <Task title={task} deleteFunction={() => {props.deleteTaskFunction(task)}}/>})}
            </div>        
        </div>         
    );
}

export default TaskContainer;