import "../CSS/components.css";
import "../CSS/global.css"

function NavTab(props){
    return (
    <div className="NavTab">
        <img src={props.url} />
        <h3 className="Heading">{props.text}</h3>
    </div>

    );
}

function Nav(props){
    return (
        <nav>
            <div className="tabContainer">
                <NavTab text="Home"/>
                <NavTab text="School"/>
                <NavTab text="Work"/>
            </div>
            <div className="miscButtons" style={{                    
                    color: "var(--light)",
                    borderTop: "solid 2px var(--dark)",
                    paddingTop: "2%",
                    display: "flex",
                    justifyContent: "flex-end"}}>  
                <span class="material-symbols-outlined icon">info</span>
                <span class="material-symbols-outlined icon">settings</span>
            </div>
        </nav>
    );
}

export default Nav;