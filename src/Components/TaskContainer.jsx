import Task from "./Task";
import { tabsArray } from "../App";
function TaskContainer(props){
    return (
        <div className="TaskContainer" style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",

            padding: "2vw",
            height: "auto",
            borderTop: "solid 2px var(--background)",
            
        }}>  
            <div className="toDoTaskContainer">
                <div className="createTaskContainer">
                    <h3 className="charCounter" style={{color: (props.taskContent.length > 35 || props.taskContent.length < 1) ?  'var(--background)' : ""}}>{props.taskContent.length}</h3>
                    <input style={{
                        backgroundColor: "var(--backgroundDark)", 
                        border: "none", 
                        color: "var(--underline)"
                            }} placeholder="Enter a task..." type="text" value={props.taskContent} 
                            onChange={
                                /* i access to the input content every time its updated, and update taskContent*/
                                (e) => {props.setTaskContentFunction(e.target.value)}
                                }/>
                    <button id="addBtn" onClick={() => props.addTaskFunction(props.taskContent)} style={{
                        fontWeight: "600",
                    }}>Add Task</button>
                             </div>        
                {/* THIS IS ONLY FOR PORTRAIT DEVICES  */}
                <nav className="tabSelector">
                    {tabsArray.map((tab) => {return(<button onClick={() => {props.updateTab(tab)}}className="mobileTab" style={{color: (props.currentTab === tab) ? "var(--underline)" : "var(--mainColor)"}}>{tab}</button>)})}
                </nav>
                <div className="tasks"> {props.tasks.map((task) => {if(task.tab === props.currentTab) {return <Task title={task.content} deleteFunction={() => {props.deleteTaskFunction(task)}}/>}return <></>})}</div>
            </div>        
        </div>         
    );
}

export default TaskContainer;