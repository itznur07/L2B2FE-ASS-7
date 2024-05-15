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
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className='btn'
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  View Details
                </button>
                <dialog id='my_modal_3' className='modal'>
                  <div className='modal-box'>
                    <form method='dialog'>
                      {/* if there is a button in form, it will close the modal */}
                      <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                        ✕
                      </button>
                    </form>
                    <h3 className='font-bold text-lg'>{item.title}</h3>
                    <img src={item.image} alt='image' />
                    <div className='badge badge-secondary'>{item.category}</div>
                    <p className='py-4'>{item?.description}</p>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelifGoods;
