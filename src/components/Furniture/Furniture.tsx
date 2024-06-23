import ch1 from '../../assets/ch1.png';
import ch2 from '../../assets/ch2.png';
import ch3 from '../../assets/ch3.png';
import ch5 from '../../assets/ch5.png';
import { CiHeart } from 'react-icons/ci';
import Icon from '../../assets/living-room.png';

function Furniture() {
  return (
    <div className='p-8 flex font-mono'>
      <div className='flex-[60%] flex space-x-8'>
        <div className='shadow-xl  bg-white rounded-xl'>
          <img src={ch1} alt='' className='w-52 z-[-1]' />
          <div className='bg-gray-200 shadow-xl px-4 py-2 rounded-b-xl   z-50 space-y-8 '>
            <div className='flex justify-between items-center'>
              <div className='text-sm'>
                <h2 className='font-bold '>Rotating</h2>
                <p className='font-thin'>Lounge Chair</p>
              </div>
              <div className='rounded-xl p-1 bg-white cursor-pointer'>
                <CiHeart />
              </div>
            </div>
            <div className='flex justify-between items-center '>
              <p>$39.00</p>

              <button className='bg-black text-white text-[12px]  px-4 py-1 rounded-xl'>
                Card
              </button>
            </div>
          </div>
        </div>
        <div className='shadow-xl  bg-white rounded-xl'>
          <img src={ch2} alt='' className='w-52 z-[-1]' />
          <div className='bg-gray-200 shadow-xl px-4 py-2 rounded-b-xl   z-50 space-y-8 '>
            <div className='flex justify-between items-center'>
              <div className='text-sm'>
                <h2 className='font-bold '>Reading</h2>
                <p className='font-thin'>Lounge Chair</p>
              </div>
              <div className='rounded-xl p-1 bg-white cursor-pointer'>
                <CiHeart />
              </div>
            </div>
            <div className='flex justify-between items-center '>
              <p>$48.00</p>

              <button className='bg-black text-white text-[12px]  px-4 py-1 rounded-xl'>
                Card
              </button>
            </div>
          </div>
        </div>
        <div className='shadow-xl  bg-white rounded-xl'>
          <img src={ch3} alt='' className='w-52 z-[-1]' />
          <div className='bg-gray-200 shadow-xl px-4 py-2 rounded-b-xl   z-50 space-y-8 '>
            <div className='flex justify-between items-center'>
              <div className='text-sm'>
                <h2 className='font-bold '>Comfort</h2>
                <p className='font-thin'>Office Chair</p>
              </div>
              <div className='rounded-xl p-1 bg-white cursor-pointer'>
                <CiHeart />
              </div>
            </div>
            <div className='flex justify-between items-center '>
              <p>$35.00</p>

              <button className='bg-black text-white text-[12px]  px-4 py-1 rounded-xl'>
                Card
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-[40%] flex space-x-12   '>
        <div className='bg-orange-400 h-full max-w-[200px] rounded-3xl p-4 ml-6'>
          <h1 className='text-3xl text-white font-bold'>
            20% OFF ON FURNITURE TOPS
          </h1>
          <img src={ch5} alt='' className='w-[400px]' />
        </div>
        <div className='bg-blue-400  w-[220px] rounded-3xl flex h-full flex-col justify-center items-center'>
          <div className='flex items-center space-x-2 '>
            <div className='bg-white rounded-full p-[6px]'>
              <img src={Icon} alt='' className='h-6 ' />
            </div>

            <h1 className='text-white'> Furnix</h1>
          </div>

          <p className='text-center text-sm mt-2 text-white'>
            20 Years of Shopping Experience
          </p>
        </div>
      </div>
    </div>
  );
}

export default Furniture;
