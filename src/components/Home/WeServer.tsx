import React from "react";

const WeServe = () => {
  return (
    <section className='mt-[86px]'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl font-bold mb-5'>We Serve for People</h2>
        <p className='text-gray-700 mb-5'>
          Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet
          pulvinar ante.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
          <div className='bg-white border p-6 rounded-lg'>
            <div className='flex items-center justify-center my-2'>
              <img
                src='https://preview.colorlib.com/theme/chariter/assets/img/icon/services1.svg'
                alt='img'
              />
            </div>
            <h3 className='text-xl font-semibold mb-4'>Pure Food & Water</h3>
            <p className='text-gray-700'>
              Odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet
              pulvinar ante employees and organizations to support.
            </p>
          </div>
          <div className='bg-white border p-6 rounded-lg'>
            <div className='flex items-center justify-center my-2'>
              <img
                src='https://preview.colorlib.com/theme/chariter/assets/img/icon/services2.svg'
                alt='img'
              />
            </div>
            <h3 className='text-xl font-semibold mb-4'>Health & Medicine</h3>
            <p className='text-gray-700'>
              Odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet
              pulvinar ante employees and organizations to support.
            </p>
          </div>
          <div className='bg-white border  p-6 rounded-lg'>
            <div className='flex items-center justify-center my-2'>
              <img
                src='https://preview.colorlib.com/theme/chariter/assets/img/icon/services1.svg'
                alt='img'
              />
            </div>
            <h3 className='text-xl font-semibold mb-4'>Education</h3>
            <p className='text-gray-700'>
              Odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet
              pulvinar ante employees and organizations to support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeServe;
