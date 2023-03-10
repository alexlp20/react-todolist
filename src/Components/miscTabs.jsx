export function InfoTab (props){
    return (
        <div>
            <h4> To Do List - Made With: <a target="_blank" rel="noreferrer" href="https://reactjs.org/">React.js</a></h4>
            <p className="infoDiv">
                This project is being made with the only purpose of learning 
                React, as it is my <span style={{color: "var(--mainColor)"}}>first time </span> using this technology. <br /> <br />
                No matter the result, it's already been worth it working on 
                this To Do List, as I've learned about different React concepts 
                such as <span style={{color: "var(--mainColor)"}}>JSX</span>, 
                <span style={{color: "var(--mainColor)"}}> Components</span> and <span style={{color: "var(--mainColor)"}}>Hooks</span>. <br /> <br />
                If you want to see the source code to see how I did anything, here is the <a href="https://github.com/alexlp20/react-todolist" target="_blank" rel="noreferrer" >link</a> to the repository.
            </p>
            <div className="infoBtns">
                <span className="material-symbols-outlined icon arrowBack" onClick={() => {props.function("Home")}}>arrow_back</span>
                <a href="https://github.com/alexlp20/" target="_blank" rel="noreferrer"><i className="fa fa-github icon" style={{fontSize: "4vh"}}></i></a>
                 {/* I had to use font awesome icons, bcause couldnt find it in google icons*/}
            </div>
        </div>
    );
}
export function PaletteTab(props) {
    const colorArray = ["#D452FF", "#52C8FF", "#69FF52", "#FFE252", "#FF9D52", "#FF5252", "#FFFFFF"];
    return (
        <div>
            <div className="paletteDiv">
                <div className="highlightColorSelector">
                    <h5 style={{textAlign:"center"}}>CHANGE <span style={{color: "var(--mainColor)"}}>MAIN</span> COLOR</h5>
                    <div className="colors">
                        {colorArray.map((color) => {return (<div className="color" onClick={() => {document.documentElement.style.setProperty("--mainColor", color)}} style={{backgroundColor: color}}></div>) })}
                    </div>
                </div>
            </div>                
            <div className="paletteDiv">
                <h5 style={{textAlign:"center"}}>CHANGE <span style={{color: "var(--mainColor)"}}>THEME</span></h5>
                <div className="themeDiv">
                    <span className="material-symbols-outlined icon" 
                    onClick={() => {
                        document.documentElement.style.setProperty("--appBackground", "white");
                        document.documentElement.style.setProperty("--backgroundDark", "#dddddd");
                        document.documentElement.style.setProperty("--background", "#c0c0c0");
                        document.documentElement.style.setProperty("--underline", "#525252");
                        document.documentElement.style.setProperty("--mainColor", "#888888");
                        }}>light_mode</span>
                    <span className="material-symbols-outlined icon"                     
                    onClick={() => {
                        document.documentElement.style.setProperty("--appBackground", "#0e0e0e");
                        document.documentElement.style.setProperty("--backgroundDark", "#141414");
                        document.documentElement.style.setProperty("--background", "#1d1d1d");
                        document.documentElement.style.setProperty("--underline", "#dddddd");
                        document.documentElement.style.setProperty("--mainColor", "#52c8ff");
                        }}>dark_mode</span>
                </div>
            </div>
            <div className="infoBtns">
                <span className="material-symbols-outlined icon arrowBack" onClick={() => {props.function("Home")}}>arrow_back</span>
                <a href="https://github.com/alexlp20/" target="_blank" rel="noreferrer"><i className="fa fa-github icon" style={{fontSize: "4vh"}}></i></a>
                 {/* I had to use font awesome icons, bcause couldnt find it in google icons*/}
            </div>   
        </div>
    );
}
