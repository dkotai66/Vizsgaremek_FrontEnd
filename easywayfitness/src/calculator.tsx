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

    render() {
        return <div>
            <body>
                <div className="container">
                    <h2>EasyWay Fitness kérdőíve</h2>
                    <div className="formContainer">
                            <form>
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
                                <button>Következő</button>
                            </div>   
                            </form>
                        
                        
                        
                    </div>
                </div>
            </body>
        </div>
    }
   
}

export default Calculator;