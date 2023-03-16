import { Component, ReactNode, useState } from "react";
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

interface lifeStyle {
    option: string;
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
        const nothing = document.getElementsByClassName('nothing') as unknown as HTMLOptionElement; //nem működik még
        if(nothing.selected) {
            alert('válassz érvényes választ')
            return;
        }

        const {regGender, regAge, regHeight, regWeight, regWeight_goal, regLook, regDiet_plan, regLifestyle, regWater_consume} = this.state;
        e.preventDefault()

        const data = {
            gender: regGender,
            age: regAge,
            weight: regWeight,
            height: regHeight,
            water_consume: regWater_consume,
            lifestyle: regLifestyle,
            diet_plan: regDiet_plan,
            weight_goal: regWeight_goal,
            look: regLook,
        }

        let response = await fetch('http://localhost:3000/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(data),
        });

        console.log(data)

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
                    <li><a href='#ismeretterjesztok'>Kalóriák</a></li>
                    <li><a href='#gyakorlatok'>Naplózás</a></li>
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
                                        <input type="radio" name={'gender'} value="Male" onChange={e=> this.setState({regGender: e.target.value})}  className="genderButton" id="man" />
                                        <label htmlFor="man" ><span>Férfi</span></label>                                            
                                    </div>
                                    <div className="col-lg-6 genderContainer">
                                        <input type="radio" name={'gender'} value="Female" onChange={e=> this.setState({regGender: e.target.value})} className="genderButton" id="woman" />
                                        <label htmlFor="woman"><span>Nő</span></label>                                            
                                    </div>
                                </div>
                            <h4 id="birthDateTitle">Add meg a korodat</h4>
                            <input type="number" id="dateInput" value={regAge} onChange={e=> this.setState({regAge: parseInt(e.currentTarget.value)})}/>  
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
                            <select name="goal" id="goals" onChange={a=> this.setState({regDiet_plan: a.currentTarget.value})} defaultValue="nothing">
                                <option className="nothing" value="nothing" hidden>---</option>
                                <option value="weightGain">Tömegnövelés</option>
                                <option value="weightLoss" >Fogyás</option>
                                <option value="thinning" >Szálkásítás</option>
                            </select>
                            <h4>Add meg a mennyit mozogsz</h4>
                            <select name="activity" id="activity" onChange={b=> this.setState({regLifestyle: b.currentTarget.value})} defaultValue="nothing">
                                <option className="nothing" value="nothing" hidden>---</option>
                                <option value="fewActivity">Keveset</option>
                                <option value="normalActivity">Átlagos</option>
                                <option value="lotActivity">Sokat</option>
                            </select>  
                            <h4>Add meg a napi vízfogyasztásodat</h4>
                            <select name="water" id="water" onChange={c=> this.setState({regWater_consume: c.currentTarget.value})} defaultValue="nothing">
                                <option className="nothing" value="nothing" hidden>---</option>
                                <option value="lessThanOneLiter">Kevesebb, mint 1 liter</option>
                                <option value="oneTwoliter">1 - 2 liter</option>
                                <option value="threeFourliter">3 - 4 liter</option>
                                <option value="moreThanFourLiter">Több, mint 4 liter</option>
                            </select> 
                            <div className="buttonContainer">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <span className="nextpreviousBtn" id='previousBtn' onClick={this.handleSecondForm} >Előző</span>
                                    </div>
                                    <div className="col-lg-6">
                                        <span className="nextpreviousBtn" onClick={this.handleFourthForm}>Következő</span>
                                    </div>
                                </div>
                            </div>   
                        </form> 
                        <form id="otherInformations">
                            <h4>Add meg a testtípusodat</h4>
                            <select name="bodyType" id="bodyType" onChange={e=> this.setState({regLook: e.currentTarget.value})} defaultValue="nothing">
                                <option className="nothing" value="nothing" hidden>---</option>
                                <option value="ectomorph" >Nehezen hízó</option>
                                <option value="mesomorph" >Normális</option>
                                <option value="endomorph" >Nehezen fogyó</option>
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