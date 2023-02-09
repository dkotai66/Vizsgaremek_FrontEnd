import { Component } from "react";
import './SignUpSignIn.css';

interface State {
    user_name: string;
    name: string;
    user_email: string;
    user_password: string;
    user_password_again: string;
}

interface User {
    id: number;
    name: string;
    user_email: string;
    user_password: string;
    user_password_again: string;
}

class SignUpSignIn extends Component<{}, State> {
    constructor(props: {}){
        super(props)

        this.state = {
            user_name: '',
            name: '',
            user_email: '',
            user_password: '',
            user_password_again: ''
        }
    }

    

    handleRegister = async () => {
        const { user_email, user_name, name, user_password, user_password_again } = this.state;
        if(user_password != user_password_again){
            alert('hiba, a két jelszó nem egyezik!')
        }

        const adat = {
            name: name,
            user_email: user_email,
            user_name: user_name,
            user_password: user_password,
            user_password_again: user_password_again,
        }

        let response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adat),
        });

        this.setState({
            user_name: '',
            name: '',
            user_email: '',
            user_password: '',
            user_password_again: ''
        })
    }

    
    
    render(){
        const { user_email, user_name, name, user_password, user_password_again } = this.state;
 
        return <div>
            <body>
                <h2 id="teamName">EasyWay Fitness</h2>
                <div className="container SignUpSignInForm">
                    <div className="col-lg-12">
                        <div className="container">
                            <div className="SignUpSignInButton">
                                <span id="toggleButton">Regisztráció</span>
                                <span id="toggleButton">Belépés</span>
                            </div>
                            <br />
                            <form id="" method="post">
                                <div className="container inputGroup">
                                    <label htmlFor="user_email"></label>
                                    <input type="text" name="user_eamil" id="user_email" value={user_email} onChange={e=> this.setState({user_email: e.currentTarget.value})} placeholder="Email" required /> <br />
                                    <label htmlFor="user_name"></label>
                                    <input type="text" name="user_name" id="user_name" value={user_name} onChange={e=> this.setState({user_name: e.currentTarget.value})} placeholder="Felhasználónév" required /> <br />
                                    <label htmlFor="name"></label>
                                    <input type="text" name="name" id="name" value={name} onChange={e=> this.setState({name: e.currentTarget.value})} placeholder="Teljes név" required /> <br />
                                    <label htmlFor="user_password"></label>
                                    <input type="password" name="user_password" id="user_password" value={user_password} onChange={e=> this.setState({user_password: e.currentTarget.value})} placeholder="jelszó" required /><br />
                                    <label htmlFor="user_password_again"></label>
                                    <input type="password" name="user_password_again" id="user_password_again" value={user_password_again} onChange={e=> this.setState({user_password_again: e.currentTarget.value})} placeholder="jelszó megint" required /> <br />
                                </div>
                                <button className="btn btn-success" onClick={this.handleRegister}>Regisztráció</button>
                            </form>
                        </div>     
                    </div>
                </div>
            </body>            
        </div>
    }
}

export default SignUpSignIn;