import NavBar from "./NavBar"

import "../CSS/components.css";


function Header(props){
   return (
   <header className="Container">
      <p className="Heading Container">Tasks completed: {props.taskNumber}</p>
      <NavBar />
   </header>); 
}

export default Header;