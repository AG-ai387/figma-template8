
import Image from "next/image";

const Featuresproduct = () => {
  return (
    <div className="w-[1020px] h-[300px] bg-white ml-[160px] ">
      <div>
        <h1 className="font-semibold font-[Inter] text-2xl ml-[20px]">
          Featured Products
        </h1>
      

      <div className="flex justify-evenly">
        <div className="mt-[20px] pl-[20px] "><Image
            src={"/images/Products (1).png"}
            width={500}
            height={500}
            alt="image"
          ></Image></div>
        <div className="mt-[20px] pl-[80px]"><Image
            src={"/images/Products (2).png"}
            width={500}
            height={500}
            alt="image"
          ></Image></div>
        <div className="mt-[20px] pl-[140px]"><Image
            src={"/images/product 3.png"}
            width={500}
            height={500}
            alt="image"
          ></Image></div>
        <div className="mt-[20px] pl-[110px]"><Image
            src={"/images/Products 4.png"}
            width={500}
            height={500}
            alt="image"
          ></Image></div>

          </div>


      </div>
    </div>
    
  );
};

export default Featuresproduct;
