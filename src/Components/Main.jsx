import { useState } from "react";
import { currentTab } from "../App";
import TaskContainer from "./TaskContainer"

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
                backgroundColor: "var(--nav)",
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
        if(newTask.length > 25){
            alert("Task title is too long.");
            setTaskContent("");
            return;
        }
        console.log(tasks)
        tasks.push(newTask);
        setTasks(tasks);
        
        setTaskContent("");

    }
    function deleteTask(task){
        console.log(task);
        const updatedArray = tasks.filter((i) => {return i !== task});
        setTasks(updatedArray);
    }
    return (
        <main style={mainStyles}>
            <HeaderOfTaskSection currentTab={currentTab}/>
            <TaskContainer 
                taskContent={taskContent}
                setTaskContentFunction={(e) => setTaskContent(e)}
                addTaskFunction={() => addTask(taskContent)}
                deleteTaskFunction={(task) => deleteTask(task)}
                tasks={tasks}
            />
        </main>
    );   
}

export default Main;