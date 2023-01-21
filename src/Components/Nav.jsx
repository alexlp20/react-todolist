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
        {props.tabs.map((tab) => { return <NavTab content={tab} function={() => {props.updateTab(tab)}} current={currentTab} />})}
    </div>);
}
function Nav(props){
    return (
        <nav>
            <NavTabContainer tabs={tabsArray} updateTab={(text) => {props.function(text)}} />
            <div className="miscButtons" style={{                    
                    color: "var(--second)",
                    borderTop: "solid 2px var(--underline)",
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