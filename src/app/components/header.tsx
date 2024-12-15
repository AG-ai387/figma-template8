
import Image from "next/image";
import Link from "next/link";



const Header = () => {
  return (
    <div className="w-[full] h-[203px]">

      
      <div className="w-[full] h-[45px] bg-black text-white">
        
          <h1 className="font-[Inter] font-normal  text-[13px] pl-[260px]">
            Free Shipping On All Orders Over $50
          </h1>
        
        
        <div className="flex justify-center gap-10">
          <h1 className="font-[Inter] font-normal">English</h1>
          <Link href="/faq"><h1 className="font-[Inter] font-normal">Faqs</h1></Link>
          <h1 className="font-[Inter] font-normal">Neeed Help</h1>
        </div>
     
       
      <div className="w-[full] h-[84px] bg-gray-100 flex">
        <div className=" pl-[150px] pt-[22px]">
          <Image
            src={"/images/logo.png"}
            width={166}
            height={40}
            alt="image"
          ></Image>
        </div>
        <div className="pl-[750px] mt-5">
           <Link href="/cart"><Image 
            src={"/images/Cart.png"}
            width={120}
            height={44}
            alt="cart"
          ></Image></Link>
        </div>
      </div>



      <div className="w-[full] h-[74px] bg-white">
        <div>
          <ul className="flex gap-10 font-[Inter] pl-[300px] pt-[27px] text-gray-500">
            <Link href="/"><li>Home</li></Link>
            <li>Shop</li>
            <Link href="/products"><li>Product</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
            <Link href="/about"><li>About</li></Link>
       
        


        <div className="pl-[230px] ">
          <h1 className=" text-gray-500">Contact:<b className="text-black">(808)555-0111</b></h1>
        </div>
        </ul>

         </div>





         </div>





    </div>
    </div>
  );
};

export default Header;
