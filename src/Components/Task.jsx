
const taskStyles = {
    width: "40%",
    height: "7vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "var(--nav)",
    color: "var(--underline)",
    borderRadius: "0.3em",
    paddingLeft: "2%",
    fontSize: "1vw",
    marginBottom: "1vw"
}
function Task(props) {
    return (
        <div style={taskStyles} >
            <h3 style={{fontWeight: "normal"}}>{props.title}</h3>
            <div className="icons" style={{marginInline: "3%"}}>
                <span onClick={(task) => {props.deleteFunction(task)}} className="material-symbols-outlined taskIcon">delete</span>
                <span className="material-symbols-outlined taskIcon">done</span>
            </div>
        </div>
    );
}

export default Task;