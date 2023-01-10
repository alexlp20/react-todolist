import { useState } from "react";
import "../CSS/components.css";
import "../CSS/global.css"

function NavTab(props){;
    return (
    <div className={`NavTab ${(props.current == props.content) ? 'currentNavTab' : ''}`} >
        <h3 className="Heading">{props.content}</h3>
    </div>
    );
}
function Nav(props){
    return (
        <nav>
            <div className="tabContainer">
                <NavTab content="Home"/>
                <NavTab content="School"/>
                <NavTab content="Work"/>
            </div>
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