import React from "react";

const Banner = () => {
  return (
    <div className='my-10'>
      <div className='hero  '>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='hero-content flex-col lg:flex-row-reverse relative '>
            <img
              src='https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              className='w-[620px] h-[380px]  rounded-2xl shadow-xl'
            />
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='bg-black opacity-50 w-[620px] h-[380px] absolute rounded-xl'></div>
            </div>
          </div>

          <div>
            <h1 className='text-5xl font-bold'>
              Fundraise for <br /> a great cause!
            </h1>
            <p className='py-6'>
              Vulputate eu scelerisque felis imperdiet proin fermentum leo.{" "}
              <br /> Est lorem ipsum dolor sit. .
            </p>
            <button className='btn bg-[#00B2FF] text-md uppercase font-medium'>
              Donate now
            </button>
            <div className='w-full h-[120px] bg-green-500  mt-3  flex flex-col  justify-center'>
              <div className='ml-5'>
                <h1 className='text-md font-medium'>Raised so far</h1>
                <h1 className='text-3xl font-semibold'>$20000</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
