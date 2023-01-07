function HeaderOfTaskSection(props){
    return(
        <div 
        className="AddTaskSection" 
        style={{
            borderBottom: "solid 2px var(--default)",
            paddingBottom: "1.4%",
        }}>
            <h2 
            style={{
                letterSpacing: "0.1em",
                fontSize: "2.2vw",
                fontFamily: "Comfortaa, sans-serif", 
                color: "var(--light)",}}> 
                    {props.currentTab /*CONTENT*/} 
            </h2>
            <button>Add Task</button>
        </div>
    );
}
function Main(props){
    return (
        <main>
            <HeaderOfTaskSection currentTab="Home"/>
        </main>
    );   
}

export default Main;