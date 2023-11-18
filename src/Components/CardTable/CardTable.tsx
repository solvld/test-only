import React from "react";
import './CardTable.scss'
import Card from '../Card/Card';
import { datesInfo } from "../../DatesInfo";


function CardTable(props: any) {

  const outline = datesInfo[props.subjectIndex]

  const list = outline.dates.map((element) => <Card key={element.date} title={element.date} text={element.info}/>)
  return (
    <div className="CardTable">
      {list}
    </div>
  )

}

export default CardTable;