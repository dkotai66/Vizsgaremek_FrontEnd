import { Component, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import './Caloria.css'

interface State {
    etelek: Etel[];
    currentFood: Etel;
    currentCalorie: number;
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
          currentFood: {name: '', calorie: 0, protein: 0, carbohydrate: 0, fat: 0} as Etel,
          currentCalorie: 0,
        }
      }

    async etelekBetoltese(){
        let response = await fetch('http://localhost:3000/food');
        let data = await response.json() as Etel[];
        this.setState({
          etelek: data,
        })
      }

    componentDidMount(){
        this.etelekBetoltese();
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
                        <select name="food" onChange={a=> this.setState({currentFood: this.state.etelek[parseInt(a.currentTarget.value)]})} defaultValue='nothing'>
                            <option value="nothing" hidden>----</option>
                            {
                                this.state.etelek.map((etel, index)=><option value={index}>{etel.name}</option>)
                            }
                        </select>
                        

                        <p>Az étel neve: {this.state.currentFood.name} </p>
                        <p>Az étel kalória mennyisége: {this.state.currentFood.calorie} <small>Kiválaszott étel 100 grammjára vonatkozik</small></p>
                        <p>Az étel fehérje mennyisége: {this.state.currentFood.protein} <small>Kiválaszott étel 100 grammjára vonatkozik</small></p>
                        <p>Az étel szénhidrát mennyisége: {this.state.currentFood.carbohydrate} <small>Kiválaszott étel 100 grammjára vonatkozik</small></p>
                        <p>Az étel zsír mennyisége: {this.state.currentFood.fat} <small>Kiválaszott étel 100 grammjára vonatkozik</small></p>
                    </div>
                </div>
            </body>
        </div>
    }
    
}