import { tab } from "@testing-library/user-event/dist/tab";
import { useState } from "react";
import { currentTab } from "../App";
import "../CSS/components.css";
import "../CSS/global.css";

function NavTab(props){;
    return (
    <div className={`NavTab ${(props.current === props.content) ? "currentNavTab" : ""}`}>
        <h3 onClick={() => {props.function()}} className="Heading">{props.content}</h3>
    </div>
    );
}
function NavTabContainer(props){
    const [current, setCurrent] = useState("Home");
    return (
    <div className="tabContainer">
        <NavTab function={() => {props.updateTab("Home") }} current={current} content="Home"/>
        <NavTab function={() => {props.updateTab("School"); }} current={current} content="School"/>
        <NavTab function={() => {props.updateTab("Work"); }} current={current} content="Work"/>
    </div>);
}
function Nav(props){
    return (
        <nav>
            <NavTabContainer updateTab={(text) => {props.function(text)}} />
            <div className="miscButtons" style={{                    
                    color: "var(--second)",
                    borderTop: "solid 2px var(--first)",
                    paddingTop: "2%",
                    display: "flex",
                    justifyContent: "flex-end"}}>  
                <span className="material-symbols-outlined icon">info</span>
                <span className="material-symbols-outlined icon">settings</span>
                <span className="material-symbols-outlined icon">palette</span>
            </div>
        </nav>
    );
}

export default Nav;