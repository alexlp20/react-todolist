import "../CSS/components.css";
import "../CSS/global.css";
import { currentTab, tabsArray } from "../App";

function NavTab(props){
    return (
    <div onClick={() => {props.function()}} className={`NavTab ${(props.current === props.content) ? "currentNavTab" : ""}`}>
        <h3 className="Heading">{props.content}</h3>
    </div>
    );
}
function NavTabContainer(props){
    return (
    <div className="tabContainer">
        <NavTab function={() => {props.updateTab("Home") }} current={currentTab} content="Home"/>
        <NavTab function={() => {props.updateTab("School"); }} current={currentTab} content="School"/>
        <NavTab function={() => {props.updateTab("Work"); }} current={currentTab} content="Work"/>
    </div>);
}
function Nav(props){
    return (
        <nav>
            <NavTabContainer updateTab={(text) => {props.function(text)}} />
            <div className="miscButtons" style={{                    
                    color: "var(--second)",
                    borderTop: "solid 2px var(--underline)",
                    paddingTop: "2%",
                    display: "flex",
                    justifyContent: "flex-end"}}>  
                <span className="material-symbols-outlined icon" onClick={() => {props.function("Info")}}>info</span>
                <span className="material-symbols-outlined icon" onClick={() => {props.function("Palette")}}>palette</span>
            </div>
        </nav>
    );
}

export default Nav;