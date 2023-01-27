import { useState } from "react";
import { currentTab } from "../App";
import { InfoTab, PaletteTab, SettingsTab } from "./miscTabs";
import TaskContainer from "./TaskContainer";


function HeaderOfTaskSection(props){
    return(
        <div 
        className="headerOfTaskSection">
            <h2 
            style={{
                fontFamily: "'Poppins', sans-serif", 
                fontWeight: "bolder",
                boxSizing: "border-box",
                color: "var(--mainColor)",
                backgroundColor: "var(--nav)",
                textAlign: "center",
            }}
            >{currentTab}   
            </h2>
            <div className="mobileNav">
                <span onClick={() => {props.function("Info")}} className="material-symbols-outlined icon">info</span>
                <span onClick={() => {props.function("Settings")}} className="material-symbols-outlined icon">settings</span>
                <span onClick={() => {props.function("Palette")}} className="material-symbols-outlined icon">palette</span>
            </div>
        </div>
    );
}

function Main(props){
    const [taskContent, setTaskContent] = useState("")
    const [tasks, setTasks] = useState([])
    function addTask(content){        
        if(content === "" || content === null){
            alert("Task title should not be empty.");
            setTaskContent("");
            return;
        }
        if(content.length > 35){
            alert("Task title is too long.");
            setTaskContent("");
            return;
        }
        let task = {
            content: content,
            tab: currentTab
        }
        tasks.push(task);
        setTasks(tasks);
        
        setTaskContent("");
        console.log(tasks)

    }
    function deleteTask(task){
        console.log(task);
        const updatedArray = tasks.filter((i) => {return i !== task});
        setTasks(updatedArray);
    }
    if (currentTab === "Home" || currentTab === "School" || currentTab === "Work"){    
        return (
            <main style={{backgroundColor: "var(--main"}}>
                <HeaderOfTaskSection function={(tab) => {props.function(tab);}} currentTab={currentTab}/>
                <TaskContainer 
                    taskContent={taskContent}
                    setTaskContentFunction={(e) => setTaskContent(e)}
                    addTaskFunction={() => addTask(taskContent)}
                    deleteTaskFunction={(task) => deleteTask(task)}
                    tasks={tasks}
                    currentTab={currentTab}
                    updateTab={(text) => {props.function(text);}}
                />
            </main>
        ); 
    } else {
        return (
            <main style={{backgroundColor: "var(--main"}}>
                <h2 style={{
                    fontFamily: "'Poppins', sans-serif", 
                    fontWeight: "bolder",
                    boxSizing: "border-box",
                    color: "var(--mainColor)",
                    backgroundColor: "var(--nav)",
                    textAlign: "center",
                }} className="configHeading">{currentTab}</h2>
                <div className="configDiv">                
                    {(currentTab === "Info") ? <InfoTab function={(text) => {props.function(text);}} /> : ""}
                    {(currentTab === "Palette") ? <PaletteTab function={(text) => {props.function(text);}}/> : ""}
                    {(currentTab === "Settings") ? <SettingsTab function={(text) => {props.function(text);}}/> : ""}
                </div>

            </main>
        );
    }
  
}

export default Main;