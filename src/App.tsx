import React from 'react';
import { datesInfo } from './DatesInfo';
import CardTable from './Components/CardTable/CardTable'
import DateHero from './Components/DateHero/DeteHero';



function App() {
  return (
    <div className="App">
      <DateHero />
      <hr />
      {/* <CardTable /> */}
      <div>{datesInfo.length}</div>
    </div>
  );
}

export default App;
