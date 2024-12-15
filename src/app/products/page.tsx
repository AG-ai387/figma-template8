
import Image from 'next/image'
import Link from 'next/link'

const Product = () => {
  return (

<div>

    <div className=' w-[1020px] h-[900px] ml-[160px]'>
        <div>
        <h1 className='font-Inter font-semibold text-2xl pl-[10px]'>All Products</h1>
          </div>

          <div className='giid grid-cols-4 space-x-4 flex justify-around mt-[20px]'>
        <Image
            src={"/images/chair1.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>

      <Link href="/singleproduct"><Image
            src={"/images/chair2.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>
          </Link>

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



        <div className='giid grid-cols-4 space-x-4 flex justify-around mt-[20px]'>
        <Image
            src={"/images/chair9.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>

<Image
            src={"/images/chair10.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>

<Image
            src={"/images/chair11.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>

<Image
            src={"/images/chair12.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>

        </div>


        <div className='giid grid-cols-4 space-x-4 flex justify-around mt-[20px]'>
        <Image
            src={"/images/chair13.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>

<Image
            src={"/images/chair14.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>

<Image
            src={"/images/chair15.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>

<Image
            src={"/images/chair16.png"}
            width={220}
            height={250}
            alt="image"
          ></Image>

        </div>

        </div>


        <section className='bg-gray-50 w-[full] h-[450px] mt-[60px]'>

          <div>
            <h1 className='font-medium text-4xl pl-[400px] pt-[40px]'>Or Subscribe To The Newsletter</h1>
            </div>




          <div><h1 className=' font-medium text-3xl pl-[350px] pt-[100px]'>Follow products and discounts on Instagram</h1></div>



          <div className='giid grid-cols-6 space-x-6  justify-around  w-[1000px] h-[550px] ml-[170px] '>
          <div className='flex space-x-8 justify-around mt-20' >
          <Image
            src={"/images/chair9.png"}
            width={130}
            height={130}
            alt="image"
          ></Image>

<Image
            src={"/images/chair5.png"}
            width={130}
            height={130}
            alt="image"
          ></Image>

<Image
            src={"/images/chair2.png"}
            width={130}
            height={130}
            alt="image"
          ></Image>

<Image
            src={"/images/chair8.png"}
            width={130}
            height={130}
            alt="image"
          ></Image>

<Image
            src={"/images/chair3.png"}
            width={130}
            height={130}
            alt="image"
          ></Image>

<Image
            src={"/images/chair16.png"}
            width={130}
            height={130}
            alt="image"
          ></Image>

          
          
          </div>


          </div>





        </section>


        </div>
        

          
            










      
  
  )
}

export default Product
