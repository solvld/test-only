import React from "react";
import './CardTable.scss'
import Card from '../Card/Card';
import { datesInfo } from "../../DatesInfo";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


function CardTable(props: any) {
  
  const outline = datesInfo[props.subjectIndex]

  const list = outline.dates.map((element) => {
    return (
      <SwiperSlide>
        <Card key={element.year} title={element.year} text={element.event}/>
      </SwiperSlide>
    )
  
})
  return (
    <>
      <Swiper 
        pagination={true} 
        navigation={true}
        modules={[Navigation, Pagination]} 
        slidesPerView={3}
        spaceBetween={30}
        className="mySwiper">
        {list}
      </Swiper>
    </>

  )

}

export default CardTable;