
const taskStyles = {
    width: "30%",
    height: "5vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "var(--darker)",
    color: "var(--underline)",
    borderRadius: "0.3em",
    paddingLeft: "1%",
    fontSize: "1vw"
}
function Task(props) {
    return (
        <div style={taskStyles}>
            <h3>{props.title}</h3>
            <div className="icons" style={{marginInline: "3%"}}>
                <span className="material-symbols-outlined taskIcon">delete</span>
                <span className="material-symbols-outlined taskIcon">done</span>
            </div>
        </div>
    );
}

export default Task;