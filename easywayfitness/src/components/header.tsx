import { Component} from "react";
import { NavLink } from "react-router-dom";
import { GoThreeBars } from "react-icons/go"; 
import "./header.css"

export default class Header extends Component {

    render() {
        return <div>
            <header>
                <nav className="navbar navbar-expand-sm  navbar-dark ">
                    <a id='teamName' className="navbar-brand">EasyWay Fitness</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item"><NavLink to='/' className="nav-link">Főoldal</NavLink></li>
                        <li className="nav-item"><NavLink to='/FoodCaloria' className="nav-link">Kalóriák</NavLink></li>
                        <li className="nav-item"><NavLink to='/Record' className="nav-link">Naplózás</NavLink></li>
                        <li className="nav-item"><NavLink to='/Calculator' className="nav-link">Kalkulátor</NavLink></li>
                    </ul>
                    <button className="nav-item" id='registration'><NavLink to='/SignUpSignIn' className="nav-link" id='signupsignin'>Regisztráció</NavLink></button>
                    </div>
                </nav>
            </header>
        </div>
    }
}