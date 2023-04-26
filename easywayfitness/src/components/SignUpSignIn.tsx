import { Component } from "react";
import Header from "./header";
import './SignUpSignIn.css';

interface State {
    regUsername: string;
    regName: string;
    regEmail: string;
    regPassword: string;
    regPasswordAgain: string;
    login: boolean;
    token: string;
    username: string;
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
            regPasswordAgain: '',
            login: false,
            token: '',
            username: '',
            password: '',
        }
    }

    componentDidMount() {
        let tokenValue = localStorage.getItem('token') || '';
        this.setState({token:tokenValue})
        if(tokenValue !== ''){
            this.setState({login: true})
        }
    }

    handlerLogin = (e:any) => {
        e.preventDefault()
        const {token, login} = this.state;
        let response = fetch('http://localhost:3000/Auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(this.state),
        }).then((resp) => {
            if (!resp.ok) {
                alert('hibás felhasználónév vagy jelszó');
                window.location.reload();
                this.setState({
                    login: false,
                })
                console.log("asd")
            }
            else{
                resp.json().then((result) => {
                    console.log('sda')
                    localStorage.setItem('token', result.token)
                    localStorage.setItem('userid', result.userid)
                    console.log(localStorage.getItem('token'));
                    this.setState({
                        login: true,
                    })
                })
            } 
        });
    }

    handlerLogOut = async (e:any) => {
        let response = await fetch('http://localhost:3000/Auth/logout', {
            method : 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
            localStorage.clear();
            sessionStorage.clear();
            window.location.reload();
    }
    

    handlerRegister = async (e:any) => {
        let validation = true;
        const { regEmail, regUsername, regName, regPassword, regPasswordAgain} = this.state;
        const signUpForm = document.getElementById('SignUpForm') as HTMLDivElement;
        const popUp = document.getElementById('popUp') as HTMLDivElement;
        e.preventDefault()
        if(regEmail === '' || regUsername === '' || regName === '' || regPassword === ''){
            alert('Hiba, egyik mező sem lehet üres!')
            validation = false;
            window.location.reload();
        }
        if(regPassword !== regPasswordAgain) {
            alert('a két jelszó nem egyezik');
            validation = false;
            window.location.reload();
        }
        if(regUsername.length <5) {
            alert('a felhasználónév nem lehet rövidebb 5 karakternél');
            validation = false;
            window.location.reload();
        }
        if(regPassword.length<8) {
            alert('a jelszó nem lehet rövidebb 8 karakternél');
            validation = false;
            window.location.reload();
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
        }).then((response) => {
            if(response.ok){
                if(validation === true) {
                    signUpForm.style.display = 'none';
                    popUp.style.display = 'block'; 
                }      
            }
            else{
                alert('hibás regisztráció!');
            }
        });
        
        
        console.log(data);

        this.setState({
            regUsername: '',
            regName: '',
            regEmail: '',
            regPassword: '',
            regPasswordAgain: '',
        });
       
        
        
        
        
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
        const { regEmail, regUsername, regName, regPassword, regPasswordAgain, username, password} = this.state;
 
        return <div>      
            <body className='mainContainer'>
            <div className='container'>
            <Header />
                <div className="container SignUpForm" id="SignUpForm">
                <h2 id="teamName">EasyWay Fitness</h2>
                {!this.state.login?
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
                                    <label htmlFor="user_name"></label>
                                    <input type="text" name="user_name" className="inputField" value={username} onChange={e=> this.setState({username: e.currentTarget.value})} placeholder="Felhasználónév" required /> <br />
                                    <label htmlFor="user_password"></label>
                                    <input type="password" name="user_password" className="inputField" value={password} onChange={e=> this.setState({password: e.currentTarget.value})} placeholder="jelszó" required /><br />
                                </div>
                                <button className="btn btn-success" onClick={this.handlerLogin}>Belépés</button>
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
                                    <label htmlFor="user_passwordAgain"></label>
                                    <input type="password" name="user_passwordAgain" className="inputField" value={regPasswordAgain} onChange={e=> this.setState({regPasswordAgain: e.currentTarget.value})} placeholder="jelszó megint" required /><br />
                                </div>
                                <button className="btn btn-success" onClick={this.handlerRegister}>Regisztráció</button>
                            </form>
                        </div>     
                    </div>
                :
                    <div className="SignedIn">
                        <h5>Jelenleg be vagy jelentkezve</h5>
                        <br />
                        <button className="btn btn-success" onClick={this.handlerLogOut}>Kijelentkezés</button>
                    </div>                    
                }                  
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


