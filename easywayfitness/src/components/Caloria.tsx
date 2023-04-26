import { Component} from "react";
import './Caloria.css'
import Header from "./header";

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
                <Header />
                    <div className="caloriaContainer"> 
                        <h2>Add meg mit ettél</h2>
                        <select name="food"  onChange={a=> this.setState({currentFood: this.state.etelek[parseInt(a.currentTarget.value)]})} defaultValue='nothing' id="foodSelector">
                            <option value="nothing" hidden>----</option>
                            {
                                this.state.etelek.map((etel, index)=><option id="foodValue" value={index}>{etel.name}</option>)
                            }
                        </select>
                        
                        <div className="foodInformations">
                            <p>Az étel neve: {this.state.currentFood.name} </p>
                            <p>Az étel kalória mennyisége: {this.state.currentFood.calorie} kcal <small><br />(Kiválaszott étel 100 grammjára vonatkozik)</small></p>
                            <p>Az étel fehérje mennyisége: {this.state.currentFood.protein} gr <small><br />(Kiválaszott étel 100 grammjára vonatkozik)</small></p>
                            <p>Az étel szénhidrát mennyisége: {this.state.currentFood.carbohydrate} gr <small><br />(Kiválaszott étel 100 grammjára vonatkozik)</small></p>
                            <p>Az étel zsír mennyisége: {this.state.currentFood.fat} <small><br /> gr (Kiválaszott étel 100 grammjára vonatkozik)</small></p>
                        </div>   
                    </div>
                </div>
            </body>
            <footer>
            <div className='footerContainer'>
              <h3>EasyWay Fitness</h3>
              <span>BMSZC Petrik Lajos Két tanítási Nyelvű Technikum</span><br />
              <span>Vizsgaremek</span>
            </div>
          </footer>
        </div>
    }
}