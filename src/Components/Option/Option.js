import React from 'react';
import { Link } from 'react-router-dom';


const Option = ({newOption}) => {
const{id,name,logo,total}=newOption;
  
   
    return (


 <div>
   
     <div className='bg-gray-400 p-6 rounded shadow-lg'>
    <div className='flex items-center justify-center'>  <img
        className='w-100  h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
        src={logo}
        alt=''
      /></div>
      <p className='mb-2 text-xl font-bold leading-none sm:text-2xl text-rose-900'>{name}</p>
      <p className='text-2xl text-rose-900'>Total Questions {total}</p>

      <Link to={`${id}`}
        type='button'
        className='px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-rose-900 text-slate-50 hover:bg-gray-700'
      >
        Start Quiz
      </Link>
    </div>
 </div>
    );
};

export default Option;