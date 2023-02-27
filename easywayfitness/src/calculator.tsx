import { Component, ReactNode } from "react";
import './Calculator.css'

interface State {
    regGender: string;
    regHeight: number;
    regWeight: number;
    regAge: number;
    regWater_consume: number;
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
    water_consume: number;
    lifestyle: string;
    diet_plan: string;
    weight_goal: number;
    look: string;
}

class Calculator extends Component<{}, State> {
    constructor(props: {}){
        super(props) 

        this.state = {
            regGender: '',
            regHeight: 0,
            regWeight: 0,
            regAge: 0,
            regWater_consume: 0,
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

    render() {
        return <div>
            <body>
                <div className="container">
                    <h2>EasyWay Fitness kérdőíve</h2>
                    <div className="formContainer">
                        <form id="personalInformations">
                            <h4 id="ageTitle">Add meg a nemed</h4>
                                <div className="row">
                                    <div className="col-lg-6 genderContainer">
                                        <input type="radio" name={'gender'} className="genderButton" id="man" />
                                        <label htmlFor="man"><span>Férfi</span></label>                                            
                                    </div>
                                    <div className="col-lg-6 genderContainer">
                                        <input type="radio" name={'gender'} className="genderButton" id="woman" />
                                        <label htmlFor="woman"><span>Nő</span></label>                                            
                                    </div>
                                </div>
                            <h4 id="birthDateTitle">Add meg a születésed</h4>
                            <input type="date" id="dateInput" />  
                            <div className="buttonContainer">
                                <span className="nextpreviousBtn" onClick={this.handleSecondForm}>Következő</span>
                            </div>  
                        </form> 
                        <form id="bodyInformations">
                            <h4>Add meg a magasságod</h4>
                            <input type="number" id="height" placeholder="cm"/>
                            <h4>Add meg a súlyodat</h4>
                            <input type="number" id="weight" placeholder="kg"/>  
                            <h4>Add meg az álom súlyodat</h4>
                            <input type="number" id="weightGoal" placeholder="kg" />  
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
                                <option value="tomegnoveles">Tömegnövelés</option>
                                <option value="fogyas">Fogyás</option>
                                <option value="szalkasitas">Szálkásítás</option>
                            </select>
                            <h4>Add meg a testmozgás típusodat</h4>
                            <select name="activity" id="activity">
                                <option value="mozgasmentes">Mozgás mentes napok</option>
                                <option value="mersekelt">Mérsékelt mozgású napok</option>
                                <option value="aktiv">Aktív napok</option>
                                <option value="nehez">Nehéz fizikai aktivitású napok</option>
                            </select>  
                            <h4>Add meg a napi vízfogyasztásodat</h4>
                            <select name="water" id="water">
                                <option value="egynelkevesebb">Kevesebb, mint 1 liter</option>
                                <option value="egyketliter">1 - 2 liter</option>
                                <option value="haromnegyliter">3 - 4 liter</option>
                                <option value="negyneltobbliter">Több, mint 4 liter</option>
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
                                <option value="nehezenhizo">Nehezen hízó</option>
                                <option value="normalis">Normális</option>
                                <option value="nehezenfogyo">Nehezen fogyó</option>
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
                                        <button id="calculateBtn" onClick={this.handleThirdForm}>Kalkulál</button>
                                    </div>
                                </div>
                            </div>   
                        </form>  
                    </div>
                </div>

                <footer>
                    <div className='footerContainer'>
                        <h3>EasyWay Fitness</h3>
                        <span>BMSZC Petrik Lajos Két tanítási Nyelvű Technikum</span><br />
                        <span>Vizsgaremek</span>
                    </div>
                </footer>
            </body>
        </div>
    }
   
}

export default Calculator;