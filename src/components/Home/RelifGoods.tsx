import { useGetReliefGoodsQuery } from "@/redux/fetures/Home/homeApi";
import React from "react";
import { Link } from "react-router-dom";

const RelifGoods = () => {
  const { data, isLoading, isSuccess } = useGetReliefGoodsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mt-[86px]'>
      {/* section title */}
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold   '>Emergency Relief Supplies</h1>
        <Link to='/relief-goods'>
          <span
            className='text-lg text-[#00B2FF] font-semibold uppercase
        '
          >
            View All
          </span>
        </Link>
      </div>

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
                    <h1 className='font-bold text-lg mb-3'>Relief Details</h1>

                    <img
                      src={
                        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D"
                      }
                      alt='image'
                      className='my-2'
                    />
                    <h3 className='font-bold text-lg'>{item.title}</h3>
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
