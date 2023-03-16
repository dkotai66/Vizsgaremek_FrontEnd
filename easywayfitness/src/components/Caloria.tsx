import { Component, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import './Caloria.css'

interface State {
    etelek: Etel[];
}

interface Etel {
    name: string;
    calorie: number;
    protein: number;
    carbohydrate: number;
    fat: number;
}

interface EtelListaResponse {
    adatok: Etel[];
}

export default class Caloria extends Component<{}, State> {

    constructor(props: {}) {
        super(props);
        
        this.state = {
          etelek: [],
        }
      }

    async ekszerekBetoltese(){
        let response = await fetch('http://localhost:3000/food');
        let data = await response.json() as Etel[];
        this.setState({
          etelek: data,
        })
      }

    componentDidMount(){
        this.ekszerekBetoltese();
    }

    render() {
       return <div>
            <body className='mainContainer'>
                <div className="container">
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
                    <div className="caloriaContainer">
                        <h2>Add meg mit ettél</h2>
                        <select name="food">
                            {
                                this.state.etelek.map(etel=><option value={etel.name}>{etel.name}</option>)
                            }
                        </select>
                        <p>Az étel neve: </p>
                        <p></p>
                    </div>
                </div>
            </body>
        </div>
    }
    
}