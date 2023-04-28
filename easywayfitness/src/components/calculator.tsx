import { Component} from "react";
import { NavLink } from "react-router-dom";
import './calculator.css'
import Header from "./header";

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
    regResultKcal: any;
    regResultProtein: any;
    regResultCarbohydrate: any;
    regResultFat: any;
    regResultWorkout: any;
    regResultWater: any;
    regBMR : number;
    regTMR: number;
    regProtein: number;
    regCarbohydrate: number;
    regFat: number;
    login: boolean;
    token: string;
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
            regResultKcal: '',
            regResultCarbohydrate: '',
            regResultFat: '',
            regResultProtein: '',
            regResultWater: '',
            regResultWorkout: '',
            regBMR : 0,
            regTMR: 0,
            regProtein: 0,
            regCarbohydrate: 0,
            regFat: 0,
            login: false,
            token: ''
        } 
    }

    componentDidMount() {
        let loggedIn = document.getElementById('loggedInPage') as HTMLDivElement;
        let loggedInFalse = document.getElementById('loggedInPageFalse') as HTMLDivElement;
        let tokenValue = localStorage.getItem('token') || '';
        this.setState({token:tokenValue})
        console.log(tokenValue)
        if(tokenValue !== ''){
            this.setState({login: true})
            loggedIn.style.display = 'block';
            loggedInFalse.style.display = 'none';
            
        }else if(tokenValue === '') {
            loggedIn.style.display = 'none';
            loggedInFalse.style.display = 'block';
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

    handlerNewDatas = async () => {
        window.location.reload();
    }

    handleCalculating =  async (e:any) => {
        let {regGender, regAge, regHeight, regWeight, regWeight_goal, regLook, regDiet_plan, regLifestyle, regWater_consume, regResultWater, regResultWorkout, regBMR, regTMR} = this.state;
        let validate = true;

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

        let response = await fetch('http://localhost:3000/calculator', {
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
            regResultKcal: "",
            regResultCarbohydrate: "",
            regResultFat: "",
            regResultProtein: "",
            regResultWater: "",
            regResultWorkout: "",
        });

        if(regGender === 'Male') {
            if(regDiet_plan === 'weightGain') {
                if(regLifestyle === 'fewActivity'){
                    regBMR = Math.round(70+(13.7*regWeight)+(5*regHeight)-(6.8*regAge));
                    regTMR = Math.round(regBMR*1.2);
                }
                if(regLifestyle === 'normalActivity'){
                    regBMR = Math.round(70+(13.7*regWeight)+(5*regHeight)-(6.8*regAge));
                    regTMR = Math.round(regBMR*1.4);
                }
                if(regLifestyle === 'lotActivity'){
                    regBMR = Math.round(70+(13.7*regWeight)+(5*regHeight)-(6.8*regAge));
                    regTMR = Math.round(regBMR*2);
                }  
            }
            
            if(regDiet_plan === 'weightLoss') {
                if(regLifestyle === 'fewActivity'){
                    regBMR = Math.round(63.20+(13.7*regWeight)+(5*regHeight)-(6.8*regAge));
                    regTMR = Math.round(regBMR*1.2);
                }
                if(regLifestyle === 'normalActivity'){
                    regBMR = Math.round(63.20+(13.7*regWeight)+(5*regHeight)-(6.8*regAge));
                    regTMR = Math.round(regBMR*1.4);
                }
                if(regLifestyle === 'lotActivity'){
                    regBMR = Math.round(63.20+(13.7*regWeight)+(5*regHeight)-(6.8*regAge));
                    regTMR = Math.round(regBMR*2);
                } 
            }
            if(regDiet_plan === 'thinning') {
                if(regLifestyle === 'fewActivity'){
                    regBMR = Math.round(66+(13.7*regWeight)+(5*regHeight)-(6.8*regAge));
                    regTMR = Math.round(regBMR*1.2);
                }
                if(regLifestyle === 'normalActivity'){
                    regBMR = Math.round(66+(13.7*regWeight)+(5*regHeight)-(6.8*regAge));
                    regTMR = Math.round(regBMR*1.4);
                }
                if(regLifestyle === 'lotActivity'){
                    regBMR = Math.round(66+(13.7*regWeight)+(5*regHeight)-(6.8*regAge));
                    regTMR = Math.round(regBMR*2);
                } 
            }       
            if(regWater_consume === 'lessThanOneLiter') {
                regResultWater = 'Fogyassz több vizet, férfiaknál napi 2.5l a minimum';
            }
            if(regWater_consume === 'oneTwoliter') {
                regResultWater = 'Fogyassz több vizet, férfiaknál napi 2.5l a minimum';
            }
            if(regWater_consume === 'threeFourliter') {
                regResultWater = 'A vízfogyasztásod ideális';
            }
            if(regWater_consume === 'moreThanFourLiter') {
                regResultWater = 'A vízfogyasztásod kicsivel több az ideálisnál';
            }    
            
        }

        if(regGender === 'Female') {
            if(regDiet_plan === 'weightGain') {
                if(regLifestyle === 'fewActivity'){
                    regBMR = Math.round(57+(13.7*regWeight)+(5*regHeight)-(6.8*regAge));
                    regTMR = Math.round(regBMR*1.2);
                }
                if(regLifestyle === 'normalActivity'){
                    regBMR = Math.round(57+(13.7*regWeight)+(5*regHeight)-(6.8*regAge));
                    regTMR = Math.round(regBMR*1.4);
                }
                if(regLifestyle === 'lotActivity'){
                    regBMR = 60+(13.7*regWeight)+(5*regHeight)-(6.8*regAge);
                    regTMR = Math.round(regBMR*2);
                }  
            }
            
            if(regDiet_plan === 'weightLoss') {
                if(regLifestyle === 'fewActivity'){
                    regBMR = Math.round(50.20+(13.7*regWeight)+(5*regHeight)-(6.8*regAge));
                    regTMR = Math.round(regBMR*1.2);
                }
                if(regLifestyle === 'normalActivity'){
                    regBMR = Math.round(50.20+(13.7*regWeight)+(5*regHeight)-(6.8*regAge));
                    regTMR = Math.round(regBMR*1.4);
                }
                if(regLifestyle === 'lotActivity'){
                    regBMR = Math.round(50.20+(13.7*regWeight)+(5*regHeight)-(6.8*regAge));
                    regTMR = Math.round(regBMR*2);
                } 
            }
            if(regDiet_plan === 'thinning') {
                if(regLifestyle === 'fewActivity'){
                    regBMR = Math.round(50.20+(13.7*regWeight)+(5*regHeight)-(6.8*regAge));
                    regTMR = Math.round(regBMR*1.2);
                }
                if(regLifestyle === 'normalActivity'){
                    regBMR = Math.round(50.20+(13.7*regWeight)+(5*regHeight)-(6.8*regAge));
                    regTMR = regBMR*1.4;
                }
                if(regLifestyle === 'lotActivity'){
                    regBMR = Math.round(50.20+(13.7*regWeight)+(5*regHeight)-(6.8*regAge));
                    regTMR = Math.round(regBMR*2);
                } 
            }       
            if(regWater_consume === 'lessThanOneLiter') {
                regResultWater = 'Fogyassz több vizet, nőknél napi 2l a minimum';
            }
            if(regWater_consume === 'oneTwoliter') {
                regResultWater = 'A vízfogyasztásod 2 liter esetén ideális';
            }
            if(regWater_consume === 'threeFourliter') {
                regResultWater = 'A vízfogyasztásod kicsivel több az ideálisnál';
            }
            if(regWater_consume === 'moreThanFourLiter') {
                regResultWater = 'A vízfogyasztásod kicsivel több az ideálisnál';
            }     
        }

        if(regLook === 'ectomorph' && regDiet_plan === 'weightGain') {
            regResultWorkout = 'Nehéz súlyzós edzés javasolt, kevés ismétlés számmal';
        }
        if(regLook === 'mesomorph') {
            regResultWorkout = 'Átlagos, testsúlyos, vagy súlyzós edzést is választhatsz';
        }
        if(regLook === 'endomorph' && regDiet_plan === 'weightLoss' || regDiet_plan === 'thinning') {
            regResultWorkout = 'Saját testsúlyos, illetve kis súlyokkal való sok ismétlés edzés javasolt';
        }

        if(regDiet_plan === 'weightGain' && regWeight >= regWeight_goal ) {
            alert('Tömeg növelést választottál, de az aktuális súlyod nagyobb mint az álomsúlyod, vagy egyenlő azzal')
            validate = false;
            window.location.reload();
        }
        if(regDiet_plan === 'weightLoss' && regWeight <= regWeight_goal ) {
            alert('Fogyást választottál, de az aktuális súlyod kevesebb mint az álomsúlyod, vagy egyenlő azzal')
            validate = false;
            window.location.reload();
        }
        if(regAge < 16 ) {
            alert('Sajnáljuk, de csak 15 éven felülieknek lett kitalálva kalkulátorunk')
            validate = false;
            window.location.reload();
        }
        if(regAge > 70 ) {
            alert('Sajnáljuk, de csak 71 éven alattiaknak lett kitalálva kalkulátorunk')
            validate = false;
            window.location.reload();
        }
        if(regWeight<30 || regWeight>255) {
            alert('Sajnáljuk, az általad megadott testsúlyra nem alkalmas kalkulátorunk')
            validate = false;
            window.location.reload();
        }
        if(regWeight_goal < 40 || regWeight_goal > 130){
            alert('Sajnáljuk, az általad megadott álom testsúlyra nem alkalmas kalkulátorunk')
            validate = false;
            window.location.reload();
        }
        if(regHeight<140 || regHeight>210) {
            alert('Sajnáljuk, az általad megadott testmagasságra nem alkalmas kalkulátorunk')
            validate = false;
            window.location.reload();
        }
        if(regLook==='' || regDiet_plan ==='' || regGender ==='' || regWater_consume ==='' || regLifestyle ==='') {
            alert('válassz érvényes választ ')
            validate = false;
            window.location.reload();
        }

        if(validate===true) {
            this.setState({regResultKcal: 'Az átlagos kalória igényed: ' + regTMR + ' kcal'});
            this.setState({regResultWater: regResultWater});
            this.setState({regResultWorkout: regResultWorkout});
            if(regGender === 'Male') {
                this.setState({regResultProtein: 'A fehérje igényed: '  + Math.round(regWeight*2) + ' gr'});
                this.setState({regResultCarbohydrate: 'A szénhidrát igényed: '  + Math.round(regWeight*4) + ' gr'});
                this.setState({regResultFat: 'A zsír igényed: '  + Math.round(regBMR*0.2) + ' gr'}); 
            } 
            else if(regGender === 'Female') {
                this.setState({regResultProtein: 'A fehérje igényed: '  + Math.round(regWeight*1.5) + ' gr'});
                this.setState({regResultCarbohydrate: 'A szénhidrát igényed: '  + Math.round(regWeight*2) + ' gr'});
                this.setState({regResultFat: 'A zsír igényed: '  + Math.round(regBMR*0.4) + ' gr'});
            }
        }
        

        const calculation = document.getElementById('calculateBtn') as HTMLButtonElement;
        const newDatas = document.getElementById('newDatas') as HTMLButtonElement;
        calculation.style.display = 'none';
        newDatas.style.width = '100%';
    }

    
  

    render() {
        const {regAge, regHeight, regWeight, regWeight_goal, regResultKcal, regResultCarbohydrate, regResultFat, regResultProtein, regResultWater, regResultWorkout} = this.state;

        return <div>
            <body className='mainContainer'>
            <div className="container">
            <Header />
            <div id="loggedInPage">
                <h2 id="calculatorTitle">EasyWay Fitness kérdőíve</h2>
                    <div className="formContainer">
                        <form id="personalInformations">
                            <h4 id="ageTitle">Add meg a nemed</h4>
                                <div className="row">
                                    <div className="col-lg-6 genderContainer">
                                        <input type="radio" name={'gender'} value="Male" onChange={e=> this.setState({regGender: e.target.value})}  className="genderButton" id="man" />
                                        <label htmlFor="man" className="genderValue"><span>Férfi</span></label>                                            
                                    </div>
                                    <div className="col-lg-6 genderContainer">
                                        <input type="radio" name={'gender'} value="Female" onChange={e=> this.setState({regGender: e.target.value})} className="genderButton" id="woman" />
                                        <label htmlFor="woman"  className="genderValue"><span>Nő</span></label>                                            
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
                            <div className="resultForm">
                                <p>{regResultKcal}</p>
                                <p>{regResultCarbohydrate}</p>
                                <p>{regResultFat}</p>
                                <p>{regResultProtein}</p>
                                <p>{regResultWater}</p>
                                <p>{regResultWorkout}</p>
                            </div>
                            <br />
                            <div className="buttonContainer">
                                <div className="row">
                                    <div className="col-lg-6" id="newDatas">
                                        <span className="nextpreviousBtn" onClick={this.handlerNewDatas}>új adatok</span>
                                    </div>
                                    <div className="col-lg-6">
                                        <button id="calculateBtn" onClick={this.handleCalculating}>Kalkulál</button>
                                    </div>
                                </div>
                            </div>   
                        </form>  
                    </div>
            </div>
            <div className="container" id="loggedInPageFalse">
                <h2>Jelentkezz be a folytatáshoz</h2>
                <p>Ez a funkció csak regisztrált felhasználóknak elérhető</p>
                <button id="loginButton"><NavLink id="navlinkSignIn" to='/SignUpSignIn'>Bejelentkezés</NavLink></button>
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