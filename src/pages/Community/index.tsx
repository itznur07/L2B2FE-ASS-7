import React from "react";

const Community = () => {
  const volunteerOpportunities = [
    {
      title: "Food Distribution Volunteer",
      description:
        "Help distribute food to families in need at our local food pantry. Responsibilities include sorting food items, packing food bags, and assisting clients.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1683134044077-c8af4c752c5f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Tutoring Volunteer",
      description:
        "Provide academic support to students from underserved communities. Help with homework, teach basic math and reading skills, and mentor students.",
      imageUrl:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Event Planning Volunteer",
      description:
        "Assist in organizing and coordinating fundraising events, community outreach programs, and awareness campaigns. Help with logistics, promotion, and coordination.",
      imageUrl:
        "https://images.unsplash.com/photo-1557660559-42497f78035b?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const donationDrives = [
    {
      title: "Winter Clothing Drive",
      description:
        "Collect warm clothing items such as jackets, sweaters, and blankets to distribute to individuals experiencing homelessness during the winter months.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1663089500161-42a457d95a89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Back-to-School Supply Drive",
      description:
        "Gather school supplies such as backpacks, notebooks, pencils, and calculators to donate to students from low-income families before the start of the school year.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1683121341746-defea7bfc148?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Holiday Food Drive",
      description:
        "Collect non-perishable food items and holiday meal essentials to provide festive meals to families in need during the holiday season.",
      imageUrl:
        "https://images.unsplash.com/photo-1626386717059-90e48caba29e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const communityEvents = [
    {
      title: "Fundraising Gala",
      description:
        "Join us for an evening of dinner, entertainment, and fundraising activities to support our community initiatives and programs.",
      imageUrl:
        "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Community Clean-Up Day",
      description:
        "Participate in a community-wide clean-up event to beautify our neighborhoods, parks, and public spaces.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1681152778997-6df11cda4ce5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Health & Wellness Fair",
      description:
        "Attend our health and wellness fair to access free health screenings, fitness classes, nutrition workshops, and more.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1663051188568-2d7bf2a538f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className='min-h-screen py-8 px-10 container'>
      <h1 className='text-4xl font-bold text-center text-blue-500 mb-8'>
        Our Community
      </h1>
      <p className='text-lg text-gray-700 mb-8'>
        Welcome to our vibrant community! At Donate Website, we believe in the
        power of coming together to create positive change. Our community
        consists of passionate volunteers, generous donors, and dedicated staff
        working together to make a difference in the world.
      </p>
      <div className='mb-8'>
        <h2 className='text-2xl font-semibold text-blue-500 mb-4'>
          Volunteer Opportunities
        </h2>
        {volunteerOpportunities.map((opportunity, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md p-6 mb-4'>
            <img
              src={opportunity.imageUrl}
              alt={opportunity.title}
              className='w-full h-40 object-cover mb-4 rounded-lg'
            />
            <h3 className='text-xl font-semibold mb-2'>{opportunity.title}</h3>
            <p className='text-gray-700'>{opportunity.description}</p>
          </div>
        ))}
      </div>
      <div className='mb-8'>
        <h2 className='text-2xl font-semibold text-blue-500 mb-4'>
          Donation Drives
        </h2>
        {donationDrives.map((drive, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md p-6 mb-4'>
            <img
              src={drive.imageUrl}
              alt={drive.title}
              className='w-full h-40 object-cover mb-4 rounded-lg'
            />
            <h3 className='text-xl font-semibold mb-2'>{drive.title}</h3>
            <p className='text-gray-700'>{drive.description}</p>
          </div>
        ))}
      </div>
      <div className='mb-8'>
        <h2 className='text-2xl font-semibold text-blue-500 mb-4'>
          Community Events
        </h2>
        {communityEvents.map((event, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md p-6 mb-4'>
            <img
              src={event.imageUrl}
              alt={event.title}
              className='w-full h-40 object-cover mb-4 rounded-lg'
            />
            <h3 className='text-xl font-semibold mb-2'>{event.title}</h3>
            <p className='text-gray-700'>{event.description}</p>
          </div>
        ))}
      </div>
      <p className='text-lg text-gray-700'>
        Ready to join our community and make a difference? Explore our
        volunteering opportunities, donate to our causes, or attend our upcoming
        events. Together, we can create a brighter future for everyone.
      </p>
    </div>
  );
};

export default Community;
