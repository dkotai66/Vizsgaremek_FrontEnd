import { Component, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import Header from "./header";
import './Record.css'

interface State {
    records: Records[];
    regBodyWeight: number;
    regWorkoutTime: number;
    regDate: Date;
    login: boolean;
    token: string;
}

interface Records {
    id: number;
    bodyWeight: number;
    workoutTime: number;
    date: Date;
    user: number;
}

export default class Record extends Component<{}, State>{
    constructor(props: {}) {
        super(props);
        
        this.state = {
          records: [],
          regBodyWeight: 0,
          regWorkoutTime: 0,
          regDate: new Date(),
          login: false,
          token: ''
        }
    }

    async rekordokBetoltese() {
        let response = await fetch('http://localhost:3000/records', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
        let data = await response.json() as Records[];
        this.setState({
            records: data,
        })
        console.log(data);
    }

    componentDidMount(){
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
        this.rekordokBetoltese();
    }

    handlerRegister=async(e:any) => {
        e.preventDefault()
        const adat = {
            bodyWeight: this.state.regBodyWeight,
            workoutTime: this.state.regWorkoutTime,
            date: new Date(),
        }

        let response = await fetch('http://localhost:3000/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(adat),
        });

        this.setState({
            regBodyWeight: 0,
            regWorkoutTime: 0,
            regDate: new Date(),
        });

        if(this.state.regBodyWeight < 30) {
            alert('Sajnáljuk, de 30 kiló alatt nem naplózhatsz ')
        }
        if(this.state.regBodyWeight > 255) {
            alert('Sajnáljuk, de 255 kiló felett nem naplózhatsz ')
        }
        if(this.state.regWorkoutTime < 5) {
            alert('Sajnáljuk, de 5 perc edzés idő alatt nem naplózhatsz ')
        }
        if(this.state.regWorkoutTime > 60) {
            alert('Sajnáljuk, de 60 perc felett nem naplózhatsz ')
        }

        await this.rekordokBetoltese();
    }

    render() {
        return <div className="mainContainer">
            <body>
                <div className="container">
                    <Header />
                    <main>
                    <div className="records" id="loggedInPage">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2><i>Adatok</i></h2>
                                <table className="table table-dark">
                                    <div>
                                        {this.state.records.map(rekord => <tbody><tr/><td className="w-52 h-8 text-center"><th>Testsúly</th>{rekord.bodyWeight}</td><td className="w-52 h-8 text-center"><th>Edzés időtartalma</th><td>{rekord.workoutTime}</td></td><><th>Edzés időpontja</th> <tr/>{rekord.date}</></tbody>)}
                                    </div>
                                </table>
                            </div>
                            <div className="col-lg-6">
                                <h2>Új adatok felvétele</h2>
                                <form action="post">
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <span>Testsúly: <input type="number" required value={this.state.regBodyWeight} onChange={e=> this.setState({regBodyWeight: parseInt(e.currentTarget.value)})}></input></span>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <span>Edzés idő: <input type="number" required value={this.state.regWorkoutTime} onChange={e=> this.setState({regWorkoutTime: parseInt(e.currentTarget.value)})}></input></span>
                                        </div>
                                    </div>
                                    <br />
                                    <button className="btn btn-success" onClick={this.handlerRegister}>Küldés</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="loggedInPageFalse">
                        <h2>Jelentkezz be a folytatáshoz</h2>
                        <p>Ez a funkció csak regisztrált felhasználóknak elérhető</p>
                        <button id="loginButton"><NavLink id="navlinkSignIn" to='/SignUpSignIn'>Bejelentkezés</NavLink></button>
                    </div>
                    
                    </main>
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