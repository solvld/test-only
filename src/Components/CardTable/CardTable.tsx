import React from "react";
import './CardTable.css'
import Card from '../Card/Card';
import { datesInfo } from "../../DatesInfo";

const outline = datesInfo[0]

function CardTable() {

  const list = outline.dates.map((element) => <Card key={element.date} title={element.date} text={element.info}/>)
  return (
    <div className="CardTable">
      {list}
    </div>
  )

}

export default CardTable;