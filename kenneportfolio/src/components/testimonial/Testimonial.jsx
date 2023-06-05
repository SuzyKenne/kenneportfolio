import React from "react";
import "./testimonial.css";
import IMG from "../../assets/employee1.png";
import AV1 from "../../assets/employe2.jpg";

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      testimonial:
      "Suzy! Trust me, she is an amazing person! In the short time I've known her, I've been blown away by her incredible personality and impressive skills. Suzy is the kind of person who never hesitates to help others, even when it means going above and beyond. Her dedication and hard work are truly inspiring, and it'll be of no surprise that she becomes an excelling engineer.what really sets Suzy apart is her kind heart and compassionate nature. She's always looking out for others, offering support and encouragement whenever it's needed. These qualities make her an outstanding person and a great working teammate.  Keep up the great work you are doing, and don't change for anything, unless for the BEST. MBIANOU BRABDON",
      avatar: IMG,
      Cname: "Client 1",
    },
    {
        id: 2,
        testimonial:
        "' SUZY is a friend and a very fantastic person for everyone in are surroundings. she is a fun girl who exudes good humor around her. she is a computer engineering student and future engineer who is doing extraordinary things that will revolutionize our lives. she is very amazing. and as we often say the key to everything is work so I'm sure you'll achieve a lot. you're someone very special. TEDJOU JASMIN",
        avatar: AV1,
        Cname: "Client 2",
      },
      {
        id: 3,
        testimonial:
        "the best developer which is hire for my project and the team was working so hard on my project all the wok will posted on a perfect time.",
        avatar: AV2,
        Cname: "Client 3",
      },
   
   
  ];
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {testimonials.map((testi) => {
          return (
            <SwiperSlide key={testi.id} className="testimonial">
              <div className="client__avatar">
                <img src={testi.avatar} alt="client avatar" />
              </div>
              <h5 className="client__name"> {testi.Cname} </h5>
              <small className="client__review"> {testi.testimonial} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonial;
