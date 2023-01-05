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
            <div className="miscButtons">
                <h3 style={{
                    color: "rgb(134, 134, 134)",
                    borderTop: "solid 2px rgb(47, 47, 47)",
                    paddingTop: "2%",
                    display: "flex",
                    justifyContent: "flex-end"}}
                    className="Heading">text text text text</h3>
            </div>
        </nav>
    );
}

export default Nav;