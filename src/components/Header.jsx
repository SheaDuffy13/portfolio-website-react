import { NavLink } from "react-router-dom";
import logo from '../images/logo.png'
import logoBlue from '../images/logo-blue.png'

export function Header(props){

    let activeNavStyle = {
        backgroundColor: "#111",
    }

    return(
        <header>
            <nav className="NavBar">
            <NavLink to="/">
                <img className="header-logo" src={logoBlue} />
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
        {/* <div className="header-name-div">
            <h1>Shea Duffy</h1>
            <p>Aspiring Web Developer</p>
        </div> */}
        </header>
       
    )
}