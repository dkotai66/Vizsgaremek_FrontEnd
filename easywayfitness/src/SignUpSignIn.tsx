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

    handlerRegister = async () => {
        const { regEmail, regUsername, regName, regPassword} = this.state;

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
   
    render(){
        const { regEmail, regUsername, regName, regPassword} = this.state;
 
        return <div>
            <body>
                <h2 id="teamName">EasyWay Fitness</h2>
                <div className="container SignUpForm">
                    <div className="col-lg-12">
                        <div className="container">
                            <div className="SignUpSignInButton">
                                <span className="toggleButton">Regisztráció</span>
                                <span className="toggleButton">Belépés</span>
                            </div>
                            <br />
                            <form id="" method="post" action="http://localhost:3000/register">
                                <div className="container inputGroup">
                                    <label htmlFor="user_email"></label>
                                    <input type="text" name="user_eamil" id="user_email" value={regEmail} onChange={e=> this.setState({regEmail: e.currentTarget.value})} placeholder="Email" required /> <br />
                                    <label htmlFor="user_name"></label>
                                    <input type="text" name="user_name" id="user_name" value={regUsername} onChange={e=> this.setState({regUsername: e.currentTarget.value})} placeholder="Felhasználónév" required /> <br />
                                    <label htmlFor="name"></label>
                                    <input type="text" name="name" id="name" value={regName} onChange={e=> this.setState({regName: e.currentTarget.value})} placeholder="Teljes név" required /> <br />
                                    <label htmlFor="user_password"></label>
                                    <input type="password" name="user_password" id="user_password" value={regPassword} onChange={e=> this.setState({regPassword: e.currentTarget.value})} placeholder="jelszó" required /><br />
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