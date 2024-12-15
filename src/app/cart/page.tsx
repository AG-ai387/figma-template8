
import Image from 'next/image'

const Cart = () => {
  return (
    <div> 





      <div className='bg-slate-100 w-[1020px] h-[400px] ml-[160px]'>
<h1 className='font-semibold text-2xl'>Bag</h1>
<div className='flex'>
  <Image
            src={"/images/layout1.png"}
            width={550}
            height={250}
            alt="image"></Image>

<div>
<Image
            src={"/images/summary fram.png"}
            width={225}
            height={250}
            alt="image">

            </Image>

            </div>

            </div>

<div>
            <Image
            src={"/images/layout3.png"}
            width={550}
            height={150}
            alt="image"></Image>
            </div>









      
      
    </div>
    </div>
  )
}

export default Cart
