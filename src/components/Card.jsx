import React from 'react'

function Card(props) {
    console.log(props.data.attributes);
    const{image,title,price} =props.data.attributes
  return (
        <div className='Card w-[352px] p-4 rounded-md   shadow-xl hover:shadow-2xl transition duration-300'>
             <img className='h-52 w-full rounded-md mb-4 object-cover' src={image} alt="" />
             <h2 className='text-center text-gray-400 text-xl mb-3'>{title}</h2>
             <h4 className='text-center text-gray-400 text-sm'>${price}</h4>

        </div>
  )
}

export default Card