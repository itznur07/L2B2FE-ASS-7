import About from "@/components/Home/About";
import React from "react";

const opportunities = [
  {
    title: "Food Distribution Volunteer",
    description:
      "Help distribute food to families in need at our local food pantry. Responsibilities include sorting food items, packing food bags, and assisting clients.",
    requirements: [
      "Must be at least 18 years old",
      "Available on weekends",
      "Ability to lift heavy objects",
    ],
    duration: "4 hours per week",
    location: "Community Food Pantry",
    imageUrl:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Tutoring Volunteer",
    description:
      "Provide academic support to students from underserved communities. Help with homework, teach basic math and reading skills, and mentor students.",
    requirements: [
      "Good communication skills",
      "Patience and empathy",
      "Available weekday afternoons",
    ],
    duration: "2 hours per week",
    location: "Local Community Center",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661963873162-5028faa8ce36?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Event Planning Volunteer",
    description:
      "Assist in organizing and coordinating fundraising events, community outreach programs, and awareness campaigns. Help with logistics, promotion, and coordination.",
    requirements: [
      "Organizational skills",
      "Creativity",
      "Available on weekends",
    ],
    duration: "Flexible hours",
    location: "Various locations",
    imageUrl:
      "https://images.unsplash.com/photo-1557660559-42497f78035b?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Volunteer = () => {
  return (
    <div className='min-h-screen  container'>
      <div className='py-8 px-6'>
        <div className=''>
          <h1 className='text-4xl font-bold text-center text-blue-400 mb-3'>
            Volunteer Opportunities
          </h1>
          <p className='text-lg text-gray-700 text-center mb-8'>
            Join us in making a difference in the community by volunteering for
            one of the following opportunities:
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {opportunities.map((opportunity, index) => (
              <div key={index} className='bg-white rounded-lg shadow-md p-5'>
                <img
                  src={opportunity.imageUrl}
                  alt={opportunity.title}
                  className='w-full h-40 object-cover mb-4 rounded-lg'
                />
                <h2 className='text-2xl font-semibold mb-2'>
                  {opportunity.title}
                </h2>
                <p className='text-gray-700 mb-4'>{opportunity.description}</p>
                <div className='mb-4'>
                  <h3 className='text-lg font-semibold mb-2'>Requirements:</h3>
                  <ul className='list-disc list-inside'>
                    {opportunity.requirements.map((requirement, index) => (
                      <li key={index} className='text-gray-700'>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className='text-gray-700 mb-2'>
                  <span className='font-semibold'>Duration:</span>{" "}
                  {opportunity.duration}
                </p>
                <p className='text-gray-700 mb-2'>
                  <span className='font-semibold'>Location:</span>{" "}
                  {opportunity.location}
                </p>
                <a
                  href='/apply'
                  className='block text-center bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-indigo-700'
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Volunteer;
