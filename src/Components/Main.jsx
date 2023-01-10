import { useState } from "react";

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
                color: "var(--second)",}}> 
                    {"hi"} 
            </h2>
        </div>
    );
}
function Main(props){
    return (
        <main>
            <HeaderOfTaskSection currentTab= 'duh'/>
        </main>
    );   
}

export default Main;