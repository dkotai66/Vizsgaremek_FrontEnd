import { Component } from "react";
import { NavLink } from "react-router-dom";
import './SignUpSignIn.css';

interface State {
    regUsername: string;
    regName: string;
    regEmail: string;
    regPassword: string;
    users: Users[];
}

interface Users {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
}

export default class SignUpSignIn extends Component<{}, State> {
    constructor(props: {}){
        super(props)

        this.state = {
            regUsername: '',
            regName: '',
            regEmail: '',
            regPassword: '',
            users: [],
        }
    }
    

    handlerRegister = async (e:any) => {
        const { regEmail, regUsername, regName, regPassword} = this.state;
        e.preventDefault()
        if(regEmail === '' || regUsername === '' || regName === '' || regPassword === ''){
            alert('Hiba, egyik mező sem lehet üres!')
            return;
        }

        const data = {
            name: regName,
            email: regEmail,
            username: regUsername,
            password: regPassword,
        };


        let response = await fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(data),
        });
        
        console.log(data);

        this.setState({
            regUsername: '',
            regName: '',
            regEmail: '',
            regPassword: '',
        });
       

        const signUpForm = document.getElementById('SignUpForm') as HTMLDivElement;
        const popUp = document.getElementById('popUp') as HTMLDivElement;
        
        signUpForm.style.display = 'none';
        popUp.style.display = 'block';
    };

    Registration = async () => {
        const log = document.getElementById('login') as HTMLFormElement;
        const reg = document.getElementById('register') as HTMLFormElement;
        const btn = document.getElementById('invisibleButton') as HTMLButtonElement;
        const regButn = document.getElementById('regButton') as HTMLButtonElement;
        const logButn = document.getElementById('logButton') as HTMLButtonElement;
        reg.style.display = "block"
        log.style.display = "none"
        btn.style.left = "0";
        regButn.style.color = "black";
        logButn.style.color = "green";
    }

    Login = async () => {
        const log = document.getElementById('login') as HTMLFormElement;
        const reg = document.getElementById('register') as HTMLFormElement;
        const btn = document.getElementById('invisibleButton') as HTMLButtonElement;
        const regButn = document.getElementById('regButton') as HTMLButtonElement;
        const logButn = document.getElementById('logButton') as HTMLButtonElement;
        log.style.display = "block"
        reg.style.display = "none"
        btn.style.left = "110px";
        regButn.style.color = "green";
        logButn.style.color = "black";
    }

    Close = async () => {
        const signUpForm = document.getElementById('SignUpForm') as HTMLDivElement;
        const popUp = document.getElementById('popUp') as HTMLDivElement;
        
        signUpForm.style.display = 'block';
        popUp.style.display = 'none';
    }
   
    render(){
        const { regEmail, regUsername, regName, regPassword} = this.state;
 
        return <div>      
            <body className='mainContainer'>
            <div className='container'>
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
                <div className="container SignUpForm" id="SignUpForm">
                <h2 id="teamName">EasyWay Fitness</h2>
                    <div className="col-lg-12">
                        <div className="container">
                            <div className="SignUpSignInButton">
                                <div id="invisibleButton"></div>
                                <button className="toggleButton" id="regButton" onClick={this.Registration}>Regisztráció</button>
                                <button className="toggleButton" id="logButton" onClick={this.Login}>Belépés</button>
                            </div>
                            <br />
                            <form id="login" className="inputGroup" method="post">
                                <div className="container inputs">
                                    <label htmlFor="user_email"></label>
                                    <input type="text" name="user_eamil" className="inputField" value={regEmail} onChange={e=> this.setState({regEmail: e.currentTarget.value})} placeholder="Email" required /> <br />
                                    <label htmlFor="user_password"></label>
                                    <input type="password" name="user_password" className="inputField" value={regPassword} onChange={e=> this.setState({regPassword: e.currentTarget.value})} placeholder="jelszó" required /><br />
                                </div>
                                <button className="btn btn-success" onClick={this.handlerRegister}>Belépés</button>
                            </form>
                            <form id="register" className="inputGroup" method="post">
                                <div className="container inputs">
                                    <label htmlFor="user_email"></label>
                                    <input type="text" name="user_eamil" className="inputField" value={regEmail} onChange={e=> this.setState({regEmail: e.currentTarget.value})} placeholder="Email" required /> <br />
                                    <label htmlFor="user_name"></label>
                                    <input type="text" name="user_name" className="inputField" value={regUsername} onChange={e=> this.setState({regUsername: e.currentTarget.value})} placeholder="Felhasználónév" required /> <br />
                                    <label htmlFor="name"></label>
                                    <input type="text" name="name" className="inputField" value={regName} onChange={e=> this.setState({regName: e.currentTarget.value})} placeholder="Teljes név" required /> <br />
                                    <label htmlFor="user_password"></label>
                                    <input type="password" name="user_password" className="inputField" value={regPassword} onChange={e=> this.setState({regPassword: e.currentTarget.value})} placeholder="jelszó" required /><br />
                                </div>
                                <button className="btn btn-success" onClick={this.handlerRegister}>Regisztráció</button>
                            </form>
                        </div>     
                    </div>
                </div>
                <div className="succesPopup" id="popUp">
                    <h2>Sikeres regisztráció!</h2>
                    <span>Az adataid sikeresen bekerültek a rendszerbe.</span> <br />
                    <span>Mostmár beléphetsz a fiókoddal az oldalra.</span>
                    <button onClick={this.Close}>Ok</button>
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


