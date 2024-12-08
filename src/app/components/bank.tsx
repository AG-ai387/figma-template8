import React from 'react'
import Image from 'next/image'

const Bank = () => {
  return (
    <div className='w-[1020px] h-[120px] bg-white ml-[130px] mt-[40px]'>
        <div className="mt-[100px] pl-[90px] ">
            <div className='pt-[30px] pl-[1px]'>
            <Image
            src={"/images/Company Logo.png"}
            width={900}
            height={1200}
            alt="image"
          ></Image>
          </div>

          </div>

      
    </div>
  )
}

export default Bank
