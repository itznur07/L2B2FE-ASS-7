import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reliefImages = [
  {
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Relief Goods Distribution 1",
    caption: "Volunteers distributing food supplies to the affected families.",
  },
  {
    url: "https://images.unsplash.com/photo-1593113616828-6f22bca04804?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Relief Goods Distribution 2",
    caption: "Setting up temporary shelters for displaced individuals.",
  },
  {
    url: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Relief Goods Distribution 3",
    caption: "Providing medical aid to those in need.",
  },
  {
    url: "https://images.unsplash.com/photo-1542627088-6603b66e5c54?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Relief Goods Distribution 4",
    caption: "Distributing clean water and hygiene kits.",
  },
  {
    url: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Relief Goods Distribution 5",
    caption: "Volunteers handing out warm clothing during the winter.",
  },
  {
    url: "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Relief Goods Distribution 6",
    caption: "Preparing meals for the homeless and needy.",
  },
];

const ReliefGallery = () => {
  return (
    <div className='mt-[120px]'>
      <h2 className='text-3xl font-bold  '>Gallery of Relief Efforts</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {reliefImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center bg-white  mt-7 pb-10 rounded-lg'>
              <img
                src={image.url}
                alt={image.alt}
                className='w-[500] h-[450px] mb-4 rounded-lg'
              />
              <p className='text-gray-600 text-center'>{image.caption}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReliefGallery;
