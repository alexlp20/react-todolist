import "../CSS/components.css";

function Header(props){
   return (
   <header>
    <p className="heading">Tasks completed: {props.taskNumber}</p>
   </header>); 
}

export default Header;