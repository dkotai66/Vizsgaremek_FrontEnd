import { Component } from "react";
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

class SignUpSignIn extends Component<{}, State> {
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

    async usersLoad() {
        let response = await fetch('http://localhost:3000/register');
        let data = await response.json();
        this.setState({
            users: data,
        })
    }

    componentDidMount() {
        this.usersLoad();
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

        let response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(data),
        });

        this.setState({
            regUsername: '',
            regName: '',
            regEmail: '',
            regPassword: '',
        });
        await this.usersLoad();
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
   
    render(){
        const { regEmail, regUsername, regName, regPassword} = this.state;
 
        return <div>      
            <body>
                <div className="container SignUpForm">
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
            </body>            
        </div>
    }
}

export default SignUpSignIn;