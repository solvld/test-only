import React from 'react';
import './App.scss';
import { datesInfo } from './DatesInfo';
import CardTable from './Components/CardTable/CardTable'
import DateHero from './Components/DateHero/DeteHero';
import Header from './Components/Header/Header';



function App() {
  return (
    <div className="App">
      <Header/>
      <DateHero />
    </div>
  );
}

export default App;
