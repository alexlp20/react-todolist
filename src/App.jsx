import "./CSS/global.css";
import Nav from "./Components/Nav"
import Main from "./Components/Main";
import { useState } from "react";

const appStyles = { 
    width: "100vw",
    height: "100vh",
    padding: "3vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "var(--appBackground)",
}

export var currentTab; 
function App() {
  const [current, setCurrent] = useState("Home");  
  currentTab = current;
  return (
    <div className="App" style={appStyles}>
      <Nav function={(text) => {setCurrent(text)}} />
      <Main />
    </div>
  );
}

export default App;

