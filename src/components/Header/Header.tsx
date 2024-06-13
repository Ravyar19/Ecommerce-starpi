import Icon from '../../assets/living-room.png';
import { RiShoppingBag4Line } from 'react-icons/ri';

import { IoMenu } from 'react-icons/io5';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
const Header = () => {
  return (
    <div className='p-10 flex justify-between items-center'>
      <div className='flex items-center space-x-2 '>
        <img src={Icon} alt='' className='h-8' />
        <h1>Furnix</h1>
      </div>
      <div className='md:flex list-none space-x-4 hidden'>
        <li>Furniture</li>
        <li>Our store</li>
        <li>Blog</li>
        <li>Customers</li>
      </div>
      <div className='md:flex items-center space-x-5 hidden'>
        <div className='relative text-gray-600 focus-within:text-gray-400   '>
          <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
            <button
              type='submit'
              className='p-1 focus:outline-none focus:shadow-outline '
            >
              <svg
                fill='none'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                viewBox='0 0 24 24'
                className='w-4 h-4'
              >
                <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
              </svg>
            </button>
          </span>
          <input
            type='search'
            name='q'
            className='py-2 rounded-full text-sm text-black bg-white  pl-10 focus:outline-none focus:bg-white focus:text-gray-900 shadow-md'
            placeholder='Search...'
          />
        </div>{' '}
        <div className='bg-white py-2 px-2 rounded-full'>
          <RiShoppingBag4Line />
        </div>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <div className='md:hidden'>
            <IoMenu className='cursor-pointer' />
          </div>
        </SheetTrigger>
        <SheetContent>
          <div className='flex flex-col'>
            <div className='flex items-center space-x-2 '>
              <img src={Icon} alt='' className='h-8' />
              <h1>Furnix</h1>
            </div>
          </div>
          <div className=' p-10 ml-10 flex flex-col list-none space-y-4  '>
            <li className='cursor-pointer'>Furniture</li>
            <li className='cursor-pointer'>Our store</li>
            <li className='cursor-pointer'>Blog</li>
            <li className='cursor-pointer'>Customers</li>
          </div>
          <div className='md:flex items-center space-x-5 hidden'>
            <div className='relative text-gray-600 focus-within:text-gray-400   '>
              <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
                <button
                  type='submit'
                  className='p-1 focus:outline-none focus:shadow-outline '
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    viewBox='0 0 24 24'
                    className='w-4 h-4'
                  >
                    <path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                  </svg>
                </button>
              </span>
              <input
                type='search'
                name='q'
                className='py-2 rounded-full text-sm text-black bg-white  pl-10 focus:outline-none focus:bg-white focus:text-gray-900 shadow-md'
                placeholder='Search...'
              />
            </div>{' '}
            <div className='bg-white py-2 px-2 rounded-full'>
              <RiShoppingBag4Line />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
