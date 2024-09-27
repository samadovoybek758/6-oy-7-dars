import React, { useEffect, useState } from 'react'
import Card from '../../components/Card';
import {DNA} from 'react-loader-spinner'

function Home() {
  const [data,setdata] = useState([])
  const [loader,setloader] = useState(false)

  useEffect(function () {
    setloader(true)
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
    .finally(function () {
      setloader(false)
    })
  },[])

  return (
    
    <div  className="continer max-w-[1088px] mx-auto flex mt-10 gap-4 flex-wrap ">
        {
           loader && <DNA height="96"width="96" className="mx-auto" />  
        }
        {
          data.length > 0 && data.map(function (value,index) {
            return <Card data={value} key={index}/>
          })
        }
        {/* <div className="continer max-w-[1088px] mx-auto flex mt-10 gap-4 flex-wrap ">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div> */}
        
    </div>
  )
}

export default Home