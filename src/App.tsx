import React from 'react';
import './App.scss';
import CardTable from './Components/CardTable/CardTable'
import DateHero from './Components/DateHero/DeteHero';
import Header from './Components/Header/Header';
import Selecter from './Components/Selecter/Selecter';



function App() {
  return (
    <div className="App">
      <Header />
      {/* <Selecter /> */}
      <DateHero />
    </div>
  );
}

export default App;
