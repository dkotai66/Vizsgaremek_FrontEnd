import { Component } from 'react';
import './App.css';

class App extends Component<{}>{
  render() {
    return <div>
      <div className='body'> 
        <div className='container'>
          <nav>
            <span id='teamName'>EasyWay Fitness</span>
              <ul className='nav justify-content-center'>
                <li><a href='#'>Főoldal</a></li>
                <li><a href='#'>Ismeretterjesztők</a></li>
                <li><a href='#'>Gyakorlatok</a></li>
                <li><a href='#'>Kalkulátor</a></li>
              </ul>
                <button id='registration'>Regisztráció</button>
            </nav>
            
            <div className='container findTheWay'>
              <h3>Találd meg az utat</h3>
              <h3>A testi tökéletesség felé</h3>
              <hr />
              <span>Itt megtanulhatod az alapokat</span><br />
              <span>Segítünk az elindulásban</span><br />
              <button id='go'>Mehet</button>
            </div>

            <div className='container educators'>
              <h3>Ismeretterjesztők</h3>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-1'>
                   
                  </div>
                </div>
              </div>
            </div>


<br /><br /><b><br /><br />adfeafw</b>
          </div>
      </div>
    </div>
  }
}

export default App;
