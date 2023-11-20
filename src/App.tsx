import React from 'react';
import './App.scss';
import CardTable from './Components/CardTable/CardTable'
import DateHero from './Components/DateHero/DeteHero';
import Header from './Components/Header/Header';
// import Swiper, { Navigation, Pagination } from '../../../node_modules/swiper';



function App() {

 

  return (
    <div className="App">
      <Header/>
      <DateHero />
    </div>
  );
}

export default App;
