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
            
            <div className='findTheWay'>
              <div className='findTheWayContent'>
                <h2>Találd meg az utat</h2>
                  <h2>A testi tökéletesség felé</h2>
                  <hr />
                  <span>Itt megtanulhatod az alapokat</span><br />
                  <span>Segítünk az elindulásban</span><br />
                  <button id='go'>Mehet</button>
              </div>
              <div className='findTheWayImage'>
                <img src="./img/pullup.jpg" alt="pullupimage" id='pullupImage'/>
              </div>   
            </div>

            <div className='container educators'>
              <h3>Ismeretterjesztők</h3>
                <div className='row'>
                  <div className='col-lg-2 dropdown'>
                   <p>Fehérjék</p>
                   <div className='dropdownContent'>
                    <p>Tejsavú fehérjék</p>
                    <p>Fehérje izolátum</p>
                    <p>Hidrolizált fehérjék</p>
                    <p>Növényalapú fehérjék</p>
                    <p>Állatifehérje</p>
                   </div>
                  </div>
                  <div className='col-lg-2 dropdown'>
                   <p>Aminosavak</p>
                   <div className='dropdownContent'>
                    <p>BCAA</p>
                    <p>L-Glutamin</p>
                    <p>EAA</p>
                    <p>Arginin</p>
                   </div>
                  </div>
                  <div className='col-lg-2 dropdown'>
                   <p>Kreatin</p>
                   <div className='dropdownContent'>
                    <p>Kreatin-monohidrát</p>
                   </div>
                  </div>
                  <div className='col-lg-2 dropdown'>
                   <p>Tömegnövelőszerek</p>
                  </div>
                  <div className='col-lg-2 dropdown'>
                   <p>Vitaminok</p>
                   <div className='dropdownContent'>
                    <p>Multivitaminok</p>
                    <p>A-vitamin</p>
                    <p>B-vitamin</p>
                    <p>C-vitamin</p>
                    <p>D-vitamin</p>
                    <p>E-vitamin</p>
                    <p>F-vitamin</p>
                    <p>K-vitamin</p>
                   </div>
                  </div>
                  <div className='col-lg-2 dropdown'>
                   <p>Izületvédelem</p>
                   <div className='dropdownContent'>
                    <p>Kollagén</p>
                    <p>Glkükózamin</p>
                   </div>
                  </div>
                </div>
                <div className='container contentInformation'>
                  <div className='row tejsavo'>
                    <div className='col-lg-12'>
                      A tejsavó fehérjét tejből technológiai eljárásokkal állítják elő. A tejsavó fehérje porok mindegyiké kissé eltér az összetevők emészthetőségében, emésztési sebességében, és persze az árában. Ezért célnak és igénynek megfelelően lehet választani tejsavó koncentrátumom, izolátumot, hidrolizátumot.
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
