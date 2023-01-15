import { useState } from "react";
import { currentTab } from "../App";
import Task from "./Task";

const mainStyles = {
    width: "70%",
    padding: "3vw",
    borderRadius: "0 1em 1em 0",
    backgroundColor: "var(--main)"
}

function HeaderOfTaskSection(props){
    return(
        <div 
        className="Section">
            <h2 
            style={{
                width: "25%",
                padding: "1%",
                fontSize: "2.2vw",
                fontFamily: "'Poppins', sans-serif", 
                fontWeight: "bolder",
                boxSizing: "border-box",
                color: "var(--mainColor)",
                backgroundColor: "var(--darker)",
                textAlign: "center",
                borderRadius: "0.2em",
                paddingBlock: "0.3em",
                marginBottom: "1em"
            }}
            >{currentTab}   
            </h2>
        </div>
    );
}

function Main(props){
    const [taskContent, setTaskContent] = useState("")
    const [tasks, setTasks] = useState([])
    function addTask(newTask){        
        if(newTask === "" || newTask === null){
            alert("Task title should not be empty.");
            setTaskContent("");
            return;
        }
        if(newTask.length > 18){
            alert("Task title is too long.");
            setTaskContent("");
            return;
        }
        tasks.push(newTask);
        setTasks(tasks);
        
        setTaskContent("");

    }
    return (
        <main style={mainStyles}>
            <HeaderOfTaskSection currentTab={currentTab}/>
           
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
                                }} placeholder="Enter a task..." type="text" value={taskContent} 
                                onChange={
                                    /* i access to the input content every time its updated, and update taskContent*/
                                    (e) => {setTaskContent(e.target.value)}
                                    }/>
                        <button id="addBtn" onClick={() => addTask(taskContent)} style={{
                            marginInlineStart: "1em",
                            width: "20%",
                            height: "3vw",
                            borderRadius: "0.5em",
                            fontWeight: "600",
                            fontSize: "1vw",
                        }}>Add Task</button>
                    </div>
                    {tasks.map((i) => {return <Task title={i} />})}
                </div>        
            </div>                
        </main>
    );   
}

export default Main;