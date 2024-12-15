import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-[full] h-[1250px]'>
      
          <section className='pt-[40px] pl-[190px]'>
            <div className='flex space-x-6'><Image
            src={"/images/Text Block (1).png"}
            width={450}
            height={450}
            alt="image"
          ></Image>

<Image
            src={"/images/Image Block.png"}
            width={450}
            height={450}
            alt="image"
          ></Image>
          

            </div>

          </section>

          <section>

            <div className=' w-[1020px] h-[300px] ml-[160px] mt-[50px]'>

                 <h1 className='font-bold font-[Inter] text-3xl pl-[280px] pt-[20px]'>What makes our Brand Different</h1>
                 <div className='grid grid-cols-4 mt-[40px]'>
                  <div className='bg-slate-200 w-[240px] h-[180px] px-7 py-10 font-semibold'>
                    
                    <h1 className='text-green-900 '>Next day as standard</h1>
                    <h3 className='text-green-900 text-sm'>Order before 3pm and get your order the next day as standard</h3>
                  </div>
                  <div className='bg-slate-200 w-[240px] h-[180px] px-7 py-10 font-semibold'>
                    <h1 className='text-green-900'>Made by true artisans</h1>
                    <h3 className='text-green-900 text-sm'>Handmade crafted goods made with real passion and craftmanship</h3>
                  </div>
                  <div className='bg-slate-200 w-[240px] h-[180px] px-7 py-10 font-semibold'>
                  <h1 className='text-green-900'>Unbeatable prices</h1>
                  <h3 className='text-green-900 text-sm'>For our materials and quality you won’t find better prices anywhere</h3>
                  </div>
                  <div className='bg-slate-200 w-[240px] h-[180px] px-7 py-10 font-semibold'>
                    <h1 className='text-green-900'>Recycled packaging</h1>
                    <h3 className='text-green-900 text-sm'>We use 100% recycled to ensure our footprint is more manageable</h3>
                  </div>
                  
                 </div>



                </div>
               </section>





               <section>
                <div className='ml-[140px]'><h1 className='font-semibold text-3xl font-[Inter]'>Our Popular Products </h1></div>
                <div className='pl-[150px] flex space-x-6 mt-[30px]'>

                <Image
            src={"/images/greensofa.png"}
            width={500}
            height={300}
            alt="image"
          ></Image>                  
                

                <Image
            src={"/images/blackchair.png"}
            width={230}
            height={250}
            alt="image"
          ></Image> 

          <Image
            src={"/images/dandy chair.png"}
            width={230}
            height={250}
            alt="image"
          ></Image>  


          </div>                
                                 
                










               </section>
        
      
    </div>
  )
}

export default About
