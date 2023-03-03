import { Component, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import './calculator.css'

interface State {
    regGender: string;
    regHeight: number;
    regWeight: number;
    regAge: number;
    regWater_consume: string;
    regLifestyle: string;
    regDiet_plan: string;
    regWeight_goal: number;
    regLook: string;
}

interface Form {
    id: number;
    gender: string;
    height: number;
    weight: number;
    age: number;
    water_consume: string;
    lifestyle: string;
    diet_plan: string;
    weight_goal: number;
    look: string;
}

export default class Calculator extends Component<{}, State> {
    constructor(props: {}){
        super(props) 

        this.state = {
            regGender: '',
            regHeight: 0,
            regWeight: 0,
            regAge: 0,
            regWater_consume: '',
            regLifestyle: '',
            regDiet_plan: '',
            regWeight_goal: 0,
            regLook: '',
        } 
    }

    handleFirstForm = async ()  => {
        const personalInformationsForm = document.getElementById('personalInformations') as HTMLFormElement;
        const bodyInformationsForm = document.getElementById('bodyInformations') as HTMLFormElement;
        const lifeStyleInformationsFrom = document.getElementById('lifeStyleInformations') as HTMLFormElement;
        const otherInformationsFrom = document.getElementById('otherInformations') as HTMLFormElement;

        personalInformationsForm.style.display = "block";
        bodyInformationsForm.style.display = "none";
        lifeStyleInformationsFrom.style.display = "none";
        otherInformationsFrom.style.display = "none";
    }

    handleSecondForm = async ()  => {
        const personalInformationsForm = document.getElementById('personalInformations') as HTMLFormElement;
        const bodyInformationsForm = document.getElementById('bodyInformations') as HTMLFormElement;
        const lifeStyleInformationsFrom = document.getElementById('lifeStyleInformations') as HTMLFormElement;
        const otherInformationsFrom = document.getElementById('otherInformations') as HTMLFormElement;

        personalInformationsForm.style.display = "none";
        bodyInformationsForm.style.display = "block";
        lifeStyleInformationsFrom.style.display = "none";
        otherInformationsFrom.style.display = "none";
    }

    handleThirdForm = async ()  => {
        const personalInformationsForm = document.getElementById('personalInformations') as HTMLFormElement;
        const bodyInformationsForm = document.getElementById('bodyInformations') as HTMLFormElement;
        const lifeStyleInformationsFrom = document.getElementById('lifeStyleInformations') as HTMLFormElement;
        const otherInformationsFrom = document.getElementById('otherInformations') as HTMLFormElement;

        personalInformationsForm.style.display = "none";
        bodyInformationsForm.style.display = "none";
        lifeStyleInformationsFrom.style.display = "block";
        otherInformationsFrom.style.display = "none";
    }

    handleFourthForm = async ()  => {
        const personalInformationsForm = document.getElementById('personalInformations') as HTMLFormElement;
        const bodyInformationsForm = document.getElementById('bodyInformations') as HTMLFormElement;
        const lifeStyleInformationsFrom = document.getElementById('lifeStyleInformations') as HTMLFormElement;
        const otherInformationsFrom = document.getElementById('otherInformations') as HTMLFormElement;

        personalInformationsForm.style.display = "none";
        bodyInformationsForm.style.display = "none";
        lifeStyleInformationsFrom.style.display = "none";
        otherInformationsFrom.style.display = "block";
    }

    handleCalculating =  async (e:any) => {
        const {regGender, regAge, regHeight, regWeight, regWeight_goal, regLook, regDiet_plan, regLifestyle, regWater_consume} = this.state;
        e.preventDefault()

        const data = {
            gender: regGender,
            age: regAge,
            weight: regWeight,
            height: regHeight,
            water_consume: regWater_consume,
            lifestle: regLifestyle,
            diet_plan: regDiet_plan,
            weight_goal: regWeight_goal,
            look: regLook,
        }

        let response = await fetch('http://localhost:3000/calculator', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(data),
        });

        this.setState({
            regAge: 0,
            regGender: "",
            regHeight: 0,
            regWeight: 0,
            regDiet_plan: "",
            regLifestyle: "",
            regLook: "",
            regWater_consume: "",
            regWeight_goal: 0,
        });
    }

    render() {
        const {regGender, regAge, regHeight, regWeight, regWeight_goal, regLook, regDiet_plan, regLifestyle, regWater_consume} = this.state;

        return <div>
            <body className='mainContainer'>
            <div className="container">
            <header>
                <nav>
                <span id='teamName'>EasyWay Fitness</span>
                <ul className='nav justify-content-center'>
                    <li><NavLink to='/'>Főoldal</NavLink></li>
                    <li><a href='#ismeretterjesztok'>Ismeretterjesztők</a></li>
                    <li><a href='#gyakorlatok'>Gyakorlatok</a></li>
                    <li><NavLink to='/Calculator'>Kalkulátor</NavLink></li>
                </ul>
                    <button id='registration'><NavLink to='/SignUpSignIn' id='signupsignin'>Regisztráció</NavLink></button>
                </nav>
            </header>
                    <h2 id="calculatorTitle">EasyWay Fitness kérdőíve</h2>
                    <div className="formContainer">
                        <form id="personalInformations">
                            <h4 id="ageTitle">Add meg a nemed</h4>
                                <div className="row">
                                    <div className="col-lg-6 genderContainer">
                                        <input type="radio" name={'gender'} value={regGender} onChange={e=> this.setState({regGender: e.currentTarget.value})} className="genderButton" id="man" />
                                        <label htmlFor="man"><span>Férfi</span></label>                                            
                                    </div>
                                    <div className="col-lg-6 genderContainer">
                                        <input type="radio" name={'gender'} value={regGender} onChange={e=> this.setState({regGender: e.currentTarget.value})} className="genderButton" id="woman" />
                                        <label htmlFor="woman"><span>Nő</span></label>                                            
                                    </div>
                                </div>
                            <h4 id="birthDateTitle">Add meg a születésed</h4>
                            <input type="date" id="dateInput" value={regAge} onChange={e=> this.setState({regAge: parseInt(e.currentTarget.value)})}/>  
                            <div className="buttonContainer">
                                <span className="nextpreviousBtn" onClick={this.handleSecondForm}>Következő</span>
                            </div>  
                        </form> 
                        <form id="bodyInformations">
                            <h4>Add meg a magasságod</h4>
                            <input type="number" id="height" value={regHeight} onChange={e=> this.setState({regHeight: parseInt(e.currentTarget.value)})} placeholder="cm"/>
                            <h4>Add meg a súlyodat</h4>
                            <input type="number" id="weight" value={regWeight} onChange={e=> this.setState({regWeight: parseInt(e.currentTarget.value)})} placeholder="kg"/>  
                            <h4>Add meg az álom súlyodat</h4>
                            <input type="number" id="weightGoal" value={regWeight_goal} onChange={e=> this.setState({regWeight_goal: parseInt(e.currentTarget.value)})} placeholder="kg" />  
                            <div className="buttonContainer">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <span className="nextpreviousBtn" id='previousBtn'onClick={this.handleFirstForm}>Előző</span>
                                    </div>
                                    <div className="col-lg-6">
                                        <span className="nextpreviousBtn" onClick={this.handleThirdForm}>Következő</span>
                                    </div>
                                </div>
                            </div>   
                        </form>  
                        <form id="lifeStyleInformations">
                            <h4>Add meg a célodat</h4>
                            <select name="goals" id="goals">
                                <option value={regDiet_plan} onChange={e=> this.setState({regDiet_plan: e.currentTarget.value})}>Tömegnövelés</option>
                                <option value={regDiet_plan} onChange={e=> this.setState({regDiet_plan: e.currentTarget.value})}>Fogyás</option>
                                <option value={regDiet_plan} onChange={e=> this.setState({regDiet_plan: e.currentTarget.value})}>Szálkásítás</option>
                            </select>
                            <h4>Add meg a testmozgás típusodat</h4>
                            <select name="activity" id="activity">
                                <option value={regLifestyle} onChange={e=> this.setState({regLifestyle: e.currentTarget.value})}>Mozgás mentes napok</option>
                                <option value={regLifestyle} onChange={e=> this.setState({regLifestyle: e.currentTarget.value})}>Mérsékelt mozgású napok</option>
                                <option value={regLifestyle} onChange={e=> this.setState({regLifestyle: e.currentTarget.value})}>Aktív napok</option>
                                <option value={regLifestyle} onChange={e=> this.setState({regLifestyle: e.currentTarget.value})}>Nehéz fizikai aktivitású napok</option>
                            </select>  
                            <h4>Add meg a napi vízfogyasztásodat</h4>
                            <select name="water" id="water">
                                <option value={regWater_consume} onChange={e=> this.setState({regWater_consume: e.currentTarget.value})}>Kevesebb, mint 1 liter</option>
                                <option value={regWater_consume} onChange={e=> this.setState({regWater_consume: e.currentTarget.value})}>1 - 2 liter</option>
                                <option value={regWater_consume} onChange={e=> this.setState({regWater_consume: e.currentTarget.value})}>3 - 4 liter</option>
                                <option value={regWater_consume} onChange={e=> this.setState({regWater_consume: e.currentTarget.value})}>Több, mint 4 liter</option>
                            </select> 
                            <div className="buttonContainer">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <span className="nextpreviousBtn" id='previousBtn'onClick={this.handleSecondForm}>Előző</span>
                                    </div>
                                    <div className="col-lg-6">
                                        <span className="nextpreviousBtn" onClick={this.handleFourthForm}>Következő</span>
                                    </div>
                                </div>
                            </div>   
                        </form> 
                        <form id="otherInformations">
                            <h4>Add meg az álomsúlyodat</h4>
                            <input type="number" id="dreamWeight" placeholder="kg"/>
                            <h4>Add meg a testtípusodat</h4>
                            <select name="bodyType" id="bodyType">
                                <option value={regLook} onChange={e=> this.setState({regLook: e.currentTarget.value})}>Nehezen hízó</option>
                                <option value={regLook} onChange={e=> this.setState({regLook: e.currentTarget.value})}>Normális</option>
                                <option value={regLook} onChange={e=> this.setState({regLook: e.currentTarget.value})}>Nehezen fogyó</option>
                            </select>  
                            <br />
                            <h4>Kalkulálás után ezen az oldalon olvashatod egyből az eredményt</h4>
                            <br />
                            <div className="buttonContainer">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <span className="nextpreviousBtn" id='previousBtn'onClick={this.handleThirdForm}>Előző</span>
                                    </div>
                                    <div className="col-lg-6">
                                        <button id="calculateBtn" onClick={this.handleCalculating}>Kalkulál</button>
                                    </div>
                                </div>
                            </div>   
                        </form>  
                    </div>
                    
                </div>               
            </body>
            <footer>
                <div className="footerContainer">
                    <h3>EasyWay Fitness</h3>
                    <span>BMSZC Petrik Lajos Két tanítási Nyelvű Technikum</span><br />
                    <span>Vizsgaremek</span>
                </div>
            </footer>
        </div>
    }
   
}