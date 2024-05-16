import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const JoinWithUs = () => {
  return (
    <div>
      <div className='hero min-h-screen '>
        <div className='hero-content flex-col lg:flex-row gap-16'>
          <div>
            <h1 className='text-5xl font-bold my-2'>Join with Us</h1>

            <p className='py-4 text-lg my-1'>
              The legal definition of a charitable organization (and of charity)
              varies between countries and in some instances regions of the
              country. The regulation, the tax treatment, and the way.
            </p>
            <button className='btn bg-[#00B2FF] text-white font-medium mt-3'>
              Join now
            </button>
          </div>
          {/* slider */}
          <div className='w-[650px] '>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1.5}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <img
                  src='https://preview.colorlib.com/theme/chariter/assets/img/gallery/about.jpg'
                  className='max-w-[500px] h-[350px] rounded-lg shadow-2xl'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  className='max-w-[450px] h-[350px] rounded-lg shadow-2xl'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='https://preview.colorlib.com/theme/chariter/assets/img/gallery/about.jpg'
                  className='max-w-[500px] h-[350px] rounded-lg shadow-2xl'
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinWithUs;
