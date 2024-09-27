import React,{useEffect,useState} from 'react';


function Images() {
  const [data,setdata] = useState([])
  useEffect(function () {
    fetch('https://strapi-store-server.onrender.com/api/products')
    .then(function (respons) {
      if (respons.status==200) {
        return respons.json()
      }
    })
    .then(function (data) {
      setdata(data.data)
    })
    .catch(function (err) {
      console.log(err);
    })
  })

  return (
    <div className='continer max-w-[1200px] mx-auto flex mt-10 gap-4 flex-wrap'>

        {
          data.length > 0 && data.map(function (value,index) {
            console.log(value);
            return <img className='w-96' src={value.attributes.image} key={index} alt="" />
          })
        }
    </div>
  )
}

export default Images