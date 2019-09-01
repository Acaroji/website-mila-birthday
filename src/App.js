import React from 'react';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      <div className="landingPage">
        <div className="topLandingPAge">
          <div className="nombreMila">MILA</div>
          <div className="pensamientosMila">60 pensées pour Mila</div>
        </div>
        <div className="landingBody">
          <div className="miniNavbar">
            <ul className="navBar"></ul>
          </div>
          <img src="./images/MilaNinos2.jpg" height="250px" weigth="250px" alt="family"/>
          <div className="information">
             Samedi 5 Octobre 2019, 
             Nous surprendrons Mila pour ses 60 ans à Auvers sur Oise
          </div>
          <img src="./images/dry-leaf1.png" alt="hoja" />
          <div className="messageBottom"> </div>
          <div className="confirmation">
            <a href="https://forms.gle/NfxJTqnuWzhw8z3N6"> <button className="button"> Confirmer ma participation</button></a> 
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
