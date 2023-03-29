import { Component, ReactNode } from "react";
import Header from "./header";
import './Record.css'

interface State {
    records: Records[];
    regBodyWeight: number;
    regWorkoutTime: number;
    regDate: Date;
}

interface Records {
    id: number;
    bodyWeight: number;
    workoutTime: number;
    date: Date;
}

export default class Record extends Component<{}, State>{
    constructor(props: {}) {
        super(props);
        
        this.state = {
          records: [],
          regBodyWeight: 0,
          regWorkoutTime: 0,
          regDate: new Date(),
        }
    }

    async rekordokBetoltese() {
        let response = await fetch('http://localhost:3000/records');
        let data = await response.json() as Records[];
        this.setState({
            records: data,
        })
    }

    componentDidMount(){
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

        await this.rekordokBetoltese();
    }

    render() {
        return <div className="mainContainer">
            <body>
                <div className="container">
                    <Header />
                    <main>
                    <div className="records">
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
                    
                    
                    </main>
                </div>
            </body>
        </div>
    }
}