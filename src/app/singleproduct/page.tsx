
import Image from 'next/image'

const SingleProduct = () => {
  return (
    <>
    <div className='w-[1000px] h-[400px] bg-slate-100 ml-[160px] mt-[40px] flex'>
      <div> <Image
            src={"/images/chair2big.png"}
            width={400}
            height={400}
            alt="image">
          </Image>

      </div>

      <div className='pl-[80px]'>
        <h1 className='font-bold font-[Inter] text-4xl'>Library Stool</h1> 
        <h1 className='font-bold font-[Inter] text-4xl'>Chair</h1>
      </div>


      <div className='w-[140px] h-[40px] bg-[#029FAE] rounded-full mt-[100px] pl-[2px] '>
        <h1 className='text-white pl-[24px] pt-[6px] '>$20.00 USD</h1>
    
        
      </div>
      
        <button className='mr-[300px]' >
        <Image
            src={"/images/Button (1).png"}
            width={200}
            height={200}
            alt="image"
          ></Image>

        </button>
      
      

      
</div>

<div>
<section className='pl-[160px] mt-[40px] mb-[40px]'>
<Image
            src={"/images/featured product group.png"}
            width={1000}
            height={400}
            alt="image"
          ></Image>
    
</section>
</div>

</>
  )
}

export default SingleProduct
