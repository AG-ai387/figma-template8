import React from 'react'
import Image from 'next/image'

const Topcategory = () => {
  return (
    <div>


        <div className='flex ml-[140px]'>
            <h1 className="font-semibold font-[Inter] text-2xl ml-[40px]">Top Categories</h1>
            </div>


            <div className='flex ml-[160px]'>
         
        <div className="mt-[20px] pl-[20px] ">
            <Image
            src={"/images/Category1.png"}
            width={315}
            height={300}
            alt="image"
          ></Image></div>


         <div className="mt-[20px] pl-[20px] "><Image
           src={"/images/category 2.png"}
            width={315}
            height={300}
            alt="image"></Image></div>

          <div className="mt-[20px] pl-[20px] "><Image
            src={"/images/category 3.png"}
            width={315}
            height={300}
            alt="image"
          ></Image></div>

          </div>
          



      
    </div>
  )
}

export default Topcategory
