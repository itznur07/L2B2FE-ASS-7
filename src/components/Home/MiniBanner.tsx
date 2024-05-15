import icon1 from "@/assets/count-icon1.svg";
import icon2 from "@/assets/count-icon2.svg";
import icon3 from "@/assets/count-icon3.svg";
import icon4 from "@/assets/count-icon4.svg";
import React from "react";

const MiniBanner = () => {
  const data = [
    {
      icon: icon1,
      title: "35+",
      desc: "Active Cases",
    },
    {
      icon: icon2,
      title: "12m",
      desc: "People Joined",
    },
    {
      icon: icon3,
      title: "200m",
      desc: "Cases every Year",
    },
    {
      icon: icon4,
      title: "1200",
      desc: "People get help from us",
    },
  ];

  return (
    <div>
      <div className='bg-[#00B2FF] flex items-center justify-between p-10'>
        {data.map((item, i) => (
          <div key={i + 1}>
            <div className='flex items-center'>
              <img src={item.icon} alt='icon' />
              <div className='ml-3'>
                <h1 className='text-3xl font-semibold text-white'>
                  {item.title}
                </h1>
                <p className='text-sm text-white'>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniBanner;
