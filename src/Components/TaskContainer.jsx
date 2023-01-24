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
            borderTop: "solid 2px rgb(29, 29, 29)",
            
        }}>  
            <div className="toDoTaskContainer">
                <div className="createTaskContainer">
                    <h3 className="charCounter" style={{color: (props.taskContent.length > 35 || props.taskContent.length < 1) ?  'rgb(40, 40, 40)' : ""}}>{props.taskContent.length}</h3>
                    <input style={{
                        backgroundColor: "rgb(20, 20, 20)", 
                        border: "none", 
                        color: "var(--secondLower)"
                            }} placeholder="Enter a task..." type="text" value={props.taskContent} 
                            onChange={
                                /* i access to the input content every time its updated, and update taskContent*/
                                (e) => {props.setTaskContentFunction(e.target.value)}
                                }/>
                    <div className="tasks"></div>
                    <button id="addBtn" onClick={() => props.addTaskFunction(props.taskContent)} style={{
                        fontWeight: "600",
                    }}>Add Task</button>
                             </div>        
                {/* THIS IS ONLY FOR PORTRAIT DEVICES  */}
                <nav className="tabSelector">
                    {tabsArray.map((tab) => {return(<button onClick={() => {props.updateTab(tab)}}className="mobileTab" style={{color: (props.currentTab === tab) ? "white" : "var(--mainColor)"}}>{tab}</button>)})}
                </nav>
                <div className="tasks"> {props.tasks.map((task) => {if(task.tab === props.currentTab) {return <Task title={task.content} deleteFunction={() => {props.deleteTaskFunction(task)}}/>}})}</div>
            </div>        
        </div>         
    );
}

export default TaskContainer;