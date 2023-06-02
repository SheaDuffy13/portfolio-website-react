import { NavLink } from "react-router-dom";

export function NavBar(props){

    let activeNavStyle = {
        backgroundColor: "#111",
    }

    return(
        <nav className="NavBar">
            <ul>
                <li>
                    <NavLink to="/" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" end style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        About
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink to="/about/contact" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        Contact
                    </NavLink>
                </li> */}
                <li>
                    <NavLink to="/projects" end style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        Projects
                    </NavLink>
                </li>
                
                
            </ul>
        </nav>
    )
}