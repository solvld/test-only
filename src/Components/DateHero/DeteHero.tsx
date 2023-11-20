import React, { useState } from "react";
import {datesInfo} from '../../DatesInfo'
import './datehero.scss';
import CardTable from "../CardTable/CardTable";

function DateHero() {

  const subjects = datesInfo

  const [dateIndex, setDateIndex] =useState(0);

  //define event hendler
  const goToNext = () => setDateIndex(prevDateIndex => prevDateIndex + 1);
  const goToBack = () => setDateIndex(prevDateIndex => prevDateIndex - 1);

  const onFirstDate = dateIndex === 0
  const onLastDate= dateIndex === subjects.length - 1;
  const lastIndex = subjects[dateIndex].dates.length -1


  return (
    <div>
      <div className="years">
        <span className="year-first">{subjects[dateIndex].dates[0].year}</span>
        <span className="year-last">{subjects[dateIndex].dates[lastIndex].year}</span>
      </div>

      <div>
        0{dateIndex + 1}/0{datesInfo.length}
      </div>
      
      <div>
        <button disabled={onFirstDate}
          onClick={goToBack}>
        &lt; 
        </button>
        <button disabled={onLastDate}
          onClick={goToNext}>
        &gt;
        </button>
      </div>

      <CardTable subjectIndex={dateIndex}/>
    </div>
  )
}

export default DateHero;