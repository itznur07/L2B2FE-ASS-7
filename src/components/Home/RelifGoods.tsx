import { useGetReliefGoodsQuery } from "@/redux/fetures/Home/homeApi";
import React from "react";

const RelifGoods = () => {
  const { data, isLoading, isSuccess } = useGetReliefGoodsQuery();

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mt-[56px]'>
      {/* section title */}
      <h1 className='text-3xl font-semibold'>Emergency Relief Supplies</h1>

      {/* Card Section */}
      <div className='grid md:grid-cols-3 grid-cols-2 justify-center items-center gap-5 mt-[24px]'>
        {data?.data?.slice(0, 6).map((item) => (
          <div className='card w-96 bg-base-100 shadow-xl'>
            <figure>
              <img src={item.image} alt='Shoes' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>
                {item.title}
                <div className='badge badge-secondary'>{item.category}</div>
              </h2>
              <p>{item.description}</p>
              <div className='card-actions justify-end'>
                <div className='btn'>View Details</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelifGoods;
