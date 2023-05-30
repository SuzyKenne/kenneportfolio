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
        "the best developer which is hire for my project and the team was working so hard on my project all the wok will posted on a perfect time.",
      avatar: IMG,
      Cname: "Client 1",
    },
    {
        id: 2,
        testimonial:
         "a professional FRONTEND developper that a completed all my task which i need to be done in my product and all the work under a proper specialized developer that give me perfect product which i need.",
        avatar: AV1,
        Cname: "Client 2",
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
