import "../CSS/components.css";
function Task(props) {
    return (
        <div className="task">
            <h3 style={{fontWeight: "normal"}}>{props.title}</h3>
            <div className="icons" style={{marginInline: "3%"}}>
                <span style={{marginRight: "0.5em"}}onClick={(task) => {props.deleteFunction(task)}} className="material-symbols-outlined taskIcon">delete</span>
                {/* <span className="material-symbols-outlined taskIcon">done</span> */}
            </div>
        </div>
    );
}

export default Task;