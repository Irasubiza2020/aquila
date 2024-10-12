import React from 'react'

const MissionVision = () => {
  return (
    <div className='p-4 md:p-16 flex flex-col items-center space-y-8'>
      {/* Mission Section */}
      <div className='w-full md:w-[80%] lg:w-[60%] bg-tertiary shadow-md rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg'>
        <h1 className=' text-center text-3xl font-bold text-third mb-4'>Mission</h1>
        <p className='text-primary text-justify'>
          To empower businesses and individuals by providing innovative branding, printing, marketing, and design solutions, from small projects to digital and software products. We strive to deliver high-quality, tailored services that elevate our clients’ brands and bring their ideas to life.
        </p>
      </div>

      {/* Vision Section */}
      <div className='w-full md:w-[80%] lg:w-[60%] bg-tertiary shadow-md rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-lg'>
        <h1 className='text-center text-3xl font-bold text-third mb-4'>Vision</h1>
        <p className='text-primary text-justify'>
          To become a leading, one-stop destination for creative and digital solutions, known for transforming ideas into impactful brands and delivering top-tier marketing and design services across industries.
        </p>
      </div>
    </div>
  )
}

export default MissionVision
