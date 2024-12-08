import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-[1020px] h-[630px] bg-gray-100 rounded-l-3xl ml-[160px] flex">
      <div className="pt-[200px] pl-[50px]">
        <h1 className="font-[Inter]" >Welcome to chairy</h1>
        <h1 className="font-[Inter] font-bold text-6xl mt-[10px]" >Best Furniture</h1> 
        <h1 className= "font-[Inter] font-bold text-6xl">Collection for your</h1>
         <h1 className="font-[Inter] font-bold text-6xl">interior.</h1>
        <button className="bg-green-500 text-white w-[171px] h-[52px] rounded-lg mt-[30px]">Shop Now</button>
      </div>

      <div className="mt-[130px] pl-[110px]"><Image
            src={"/images/chairmain.png"}
            width={300}
            height={440}
            alt="image"
          ></Image>
          </div>




    </div>
  );
};

export default Hero;
