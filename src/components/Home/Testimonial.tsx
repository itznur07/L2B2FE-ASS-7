import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
import "swiper/css";

// Sample testimonial data
const testimonials = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaWV50Z0K6uGG_eXH9Ro_RDZ9SjmGHJyHqb_PNyem5HoYGLxYxSj8lSVqYzF2aSjNdQw&usqp=CAU",
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    position: "MD, Max Hospital",
  },
  {
    image:
      "https://img.freepik.com/free-photo/people-preparing-box-with-food-donation_23-2148613300.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1715126400&semt=ais",
    name: "Hannan Basar",
    testimonial:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    position: "GM, CSCR",
  },
  {
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    name: "Joynal Khan",
    testimonial:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    position: "CFO, Health Force",
  },
  {
    image:
      "https://t4.ftcdn.net/jpg/05/29/06/57/360_F_529065726_40CTs58DMNuDN1OiLDEvo9JaTk6VFCQ3.webp",
    name: "Soriful Khan",
    testimonial:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    position: "COO, Epic",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ62hxkbwoyTzKtqqbQndovmr1aYoZcv9EekPLZ1iAWmg&s",
    name: "Hamidul Islam",
    testimonial:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    position: "CMO, Genalral ",
  },
  {
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715731200&semt=sph",
    name: "Rofiqul",
    testimonial:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    position: "CDO, DMP",
  },
];

const Testimonials = () => {
  return (
    <div className='mt-[86px] mb-3'>
      <h2 className='text-3xl font-bold  mb-8 '>Testimonials</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center bg-white  p-6   border rounded-lg'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='w-24 h-24 rounded-full mb-4'
              />
              <h3 className='text-xl font-semibold mb-2'>{testimonial.name}</h3>
              <p className='italic mb-4'>
                "{testimonial.testimonial.slice(0, 70)}"
              </p>
              <p className='text-gray-600 font-medium'>
                {testimonial.position}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
