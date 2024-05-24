import About from "@/components/Home/About";
import JoinWithUs from "@/components/Home/JoinWithUs";
import React from "react";

const donors = [
  {
    name: "Alice Johnson",
    amount: "$1200",
    date: "2024-05-01",
    message: "Keep up the great work!",
  },
  {
    name: "Bob Smith",
    amount: "$1000",
    date: "2024-04-15",
    message: "Happy to help!",
  },
  {
    name: "Charlie Rose",
    amount: "$800",
    date: "2024-03-30",
    message: "Amazing initiative.",
  },
  {
    name: "David Warner",
    amount: "$600",
    date: "2024-02-20",
    message: "Proud to contribute.",
  },
  {
    name: "Eva Green",
    amount: "$400",
    date: "2024-01-10",
    message: "Every bit counts!",
  },
];

const Leaderboard = () => {
  return (
    <div className='min-h-screen '>
      <div className='flex items-center justify-center py-8'>
        <div className='bg-white shadow-md rounded-lg p-8 max-w-2xl w-full'>
          <h1 className='text-4xl font-bold mb-6 text-center text-indigo-600'>
            Leaderboard
          </h1>
          <ul>
            {donors.map((donor, index) => (
              <li
                key={index}
                className='flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-gray-200'
              >
                <div className='flex-1'>
                  <h2 className='text-2xl font-semibold'>{donor.name}</h2>
                  <p className='text-sm text-gray-500'>{donor.date}</p>
                  <p className='text-gray-700 mt-2'>{donor.message}</p>
                </div>
                <span className='text-2xl font-bold mt-4 md:mt-0'>
                  {donor.amount}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <About />
      <JoinWithUs />
    </div>
  );
};

export default Leaderboard;
