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
        className="AddTaskSection">
            <h2 
            style={{
                width: "25%",
                padding: "1%",
                fontSize: "2.2vw",
                fontFamily: "'Poppins', sans-serif", 
                fontWeight: "bolder",
                boxSizing: "border-box",
                color: "var(--blue)",
                backgroundColor: "var(--darker)",
                textAlign: "center",
                borderRadius: "0.2em"    
            }}
            >{currentTab}   
            </h2>
        </div>
    );
}

function Main(props){
    return (
        <main style={mainStyles}>
            <HeaderOfTaskSection currentTab={currentTab}/>
            <div className="TaskContainer" style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",

                padding: "2vw",
                height: "auto",
                borderBottom: "solid 2px var(--blue)",
                
            }}>                
                <Task title="Test Task"/>
            </div>
        </main>
    );   
}

export default Main;