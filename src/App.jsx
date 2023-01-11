import "./CSS/global.css";
import Nav from "./Components/Nav"
import Main from "./Components/Main";
import { useState } from "react";

export var currentTab; 
function App() {
  const [current, setCurrent] = useState("Home");  
  currentTab = current;
  return (
    <div className="App">
      <Nav function={(text) => {setCurrent(text)}} />
      <Main />
    </div>
  );
}

export default App;

