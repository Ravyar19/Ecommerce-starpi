const Hero = () => {
  return (
    <div className='flex justify-center items-center mt-10 flex-col p-4 md:p-0 '>
      <div className=' '>
        <h1 className='  text-[48px] md:text-[60px] text-center font-mono font-bold'>
          FIND YOUR
        </h1>
        <h1 className='text-[48px]  font-thin text-center mt-[-16px]  '>
          DREAM FURNITURE
        </h1>
        <p className='text-center font-thin   text-xl md:mt-8 '>
          Explore World Class Top Furniture As Per Your Requirements & Choice
        </p>
      </div>
      <div className='mt-14 flex space-x-10'>
        <div className='h-32 flex min-w-[200px] justify-center items-center p-10 rounded-xl  bg-orange-400 hover:shadow-xl hover:text-white  '>
          <h1>Bedroom</h1>
        </div>
        <div className='h-32 flex flex-col min-w-[200px] justify-center items-center p-10 rounded-xl  bg-white hover:shadow-xl'>
          <h1>Living </h1>
          <h1>Room </h1>
        </div>
        <div className='h-32 flex justify-center min-w-[200px] items-center p-10 rounded-xl  bg-blue-400 hover:shadow-xl hover:text-white'>
          <h1>Bedroom</h1>
        </div>
        <div className='h-32 flex flex-col min-w-[200px] justify-center items-center p-10 rounded-xl  bg-white hover:shadow-xl'>
          <h1>Reading </h1>
          <h1>Room </h1>
        </div>
        <div className='h-32 flex flex-col min-w-[200px] justify-center items-center p-10 rounded-xl  bg-green-500 hover:shadow-xl hover:text-white'>
          <h1>Office </h1>
          <h1>Table </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
