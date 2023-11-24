import React, { useState } from "react";
import {datesInfo} from '../../DatesInfo'
import './datehero.scss';
import CardTable from "../CardTable/CardTable";
import { gsap, Power1 } from "gsap";


function DateHero() {
  const items = document.querySelectorAll(".year-firs");

  gsap.from(items, {
    textContent: 0,
    duration: 4,
    ease: Power1.easeIn,
    snap: { textContent: 1 },
    stagger: 1,
    // onUpdate: textContent.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  });

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