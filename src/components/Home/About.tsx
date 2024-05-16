import React from "react";

const About = () => {
  return (
    <div>
      <div className='hero min-h-screen '>
        <div className='hero-content flex-col lg:flex-row gap-16'>
          <img
            src='https://preview.colorlib.com/theme/chariter/assets/img/gallery/about.jpg'
            className='max-w-[600px] rounded-lg shadow-2xl'
          />
          <div>
            <h1 className='text-5xl font-bold'>Who we are?</h1>
            <p className='my-3 text-sm font-medium'>
              Sedac odio aliquet, fringilla odio eget, tincidunt nunc. Duis
              aliquet pulvinar ante tempor etiam lacus eros
            </p>
            <p className='py-4'>
              The legal definition of a charitable organization (and of charity)
              varies between countries and in some instances regions of the
              country. The regulation, the tax treatment, and the way in which
              charity law affects charitable organizations also vary.
            </p>
            <button className='btn bg-[#00B2FF] text-white font-medium'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
