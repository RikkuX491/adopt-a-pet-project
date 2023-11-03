import {NavLink} from "react-router-dom"

function NavBar(){
    return <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pets">Pets</NavLink>
        <NavLink to="/add_pet">Add Pet</NavLink>
    </nav>
}

export default NavBar