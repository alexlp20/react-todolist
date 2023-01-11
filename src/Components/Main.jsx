import { useState } from "react";
import { currentTab } from "../App";

function HeaderOfTaskSection(props){
    return(
        <div 
        className="AddTaskSection" 
        style={{
            borderBottom: "solid 2px var(--middle)",
            paddingBottom: "1.4%",
        }}>
            <h2 
            style={{
                letterSpacing: "0.1em",
                fontSize: "2.2vw",
                fontFamily: "Comfortaa, sans-serif", 
                fontWeight: "lighter",
                color: "var(--second)",}}
            >{currentTab}   
            </h2>
        </div>
    );
}
function Main(props){
    return (
        <main>
            <HeaderOfTaskSection currentTab={currentTab}/>
        </main>
    );   
}

export default Main;