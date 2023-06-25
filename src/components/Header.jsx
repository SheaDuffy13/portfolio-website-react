import { NavLink } from "react-router-dom";
import logoBlue from '../images/SD-logo-3.png'

export function Header(props){

    let activeNavStyle = {
        backgroundColor: "#111",
    }

    return(
        <header>
            <nav className="NavBar">
            <NavLink to="/">
                <img className="header-logo" src={logoBlue} alt="" />
            </NavLink>
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
                <li>
                    <NavLink to="/projects" end style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        Projects
                    </NavLink>
                </li>
            </ul>
        </nav>

        </header>
       
    )
}