
import Image from 'next/image'

const Oproducts = () => {
  return (
    <div className='w-[1000px] h-[700px]  ml-[160px] mt-[150px]'>
        <div>
            <h1 className='font-semibold text-2xl font-[Inter] ml-[410px]'>Our Products</h1>
        </div>


        
        <div className='giid grid-cols-4 space-x-4 flex justify-around'>
        <Image
            src={"/images/chair1.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>
          

        <Image
            src={"/images/chair2.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>
          

<Image
            src={"/images/chair3.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>

<Image
            src={"/images/chair4.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>

        </div>




        <div className='giid grid-cols-4 space-x-4 flex justify-around mt-[40px]'>
        <Image
            src={"/images/chair5.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>

<Image
            src={"/images/chair6.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>

<Image
            src={"/images/chair7.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>

<Image
            src={"/images/chair8.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>

        </div>

       







      
    </div>
  )
}

export default Oproducts
