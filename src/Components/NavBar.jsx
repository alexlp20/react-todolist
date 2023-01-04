function NavButton(props){
    return(
        <button>{props.content}</button>
    );
}

function NavBar(){
    return (
        <nav className="Container">
            <NavButton content="hello"/>
        </nav>
    );
}

export default NavBar;