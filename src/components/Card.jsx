import React from 'react';
import Image from './image';

function Card(props) {
    const{title,price} =props.data.attributes
  return (
        <div className='Card w-[352px] p-4 rounded-md   shadow-xl hover:shadow-2xl transition duration-300'>
             <Image></Image>
             <h2 className='text-center text-gray-400 text-xl mb-3'>{title}</h2>
             <h4 className='text-center text-gray-400 text-sm'>${price}</h4>

        </div>
  )
}

export default Card



