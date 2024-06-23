import { CiHeart } from 'react-icons/ci';

function Product(props) {
  return (
    <div className='shadow-xl  bg-white rounded-xl'>
      <img src={props.img} alt='' className='w-52 z-[-1]' />
      <div className='bg-gray-200 shadow-xl px-4 py-2 rounded-b-xl   z-50 space-y-8 '>
        <div className='flex justify-between items-center'>
          <div className='text-sm'>
            <h2 className='font-bold '>{props.title}</h2>
            <p className='font-thin'>{props.desc}</p>
          </div>
          <div className='rounded-xl p-1 bg-white cursor-pointer'>
            <CiHeart />
          </div>
        </div>
        <div className='flex justify-between items-center '>
          <p>{props.price}</p>

          <button className='bg-black text-white text-[12px]  px-4 py-1 rounded-xl'>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
