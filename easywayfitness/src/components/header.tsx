import { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
    render() {
        return <div>
            <header>
                <nav>
                <span id='teamName'>EasyWay Fitness</span>
                <ul className='nav justify-content-center'>
                    <li><NavLink to='/'>Főoldal</NavLink></li>
                    <li><NavLink to='/FoodCaloria'>Kalóriák</NavLink></li>
                    <li><a href='#gyakorlatok'>Naplózás</a></li>
                    <li><NavLink to='/Calculator'>Kalkulátor</NavLink></li>
                </ul>
                    <button id='registration'><NavLink to='/SignUpSignIn' id='signupsignin'>Regisztráció</NavLink></button>
                </nav>
            </header>
        </div>
    }
}