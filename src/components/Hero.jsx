import React from "react";
import heropic from "../assets/heropic.png";
import vector from "../assets/Vector.png";
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"

const Hero = () => {
  return (
    <>
      <div className="p-6 bg-[#0C30AE] text-white">
        <div className="flex flex-col sm:flex-row mb-6  lg:flex-row gap-2">
          <p className=" font-hagrid text-8xl lg:text-[140px] ">your Vision</p>
          <div className="flex items-end  ">
            <h6 className="font-binger text-sm">HIGH QUALITY</h6>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row">
          <div className="hidden sm:block mt-2 w-96 h-auto ">
            <img src={heropic} className="max-w-full h-auto object-contain" />
          </div>

          <div className="flex flex-col">
            <div className=" secndline h-fit items-center flex flex-col sm:flex-row  gap-5 ">
              <p className="font-hagrid text-8xl lg:text-[160px]">OUR</p>
              <img src={vector} className="w-32 h-32" />
              <div className="hidden font-binger sm:flex items-center text-sm sm:ml-16 font-normal w-80 h-20">
                I craft websites that align with your brand and engage your
                audience - creating meaningful and memorable experiences
              </div>
            </div>

            <div>
              <p className="font-hagrid text-center text-[80px] lg:text-[160px]">DESIGN</p>
            </div>
            <div className="">
                <p className="font-binger text-center">(INFO@WORKMAIL.COM)</p>
            </div>

            {/* pictures */}
            <div  className="mt-2 flex flex-row justify-end gap-4">
               <div>
                <p>(01)</p>
                <img className="w-24 h-24" src={pic1}/>
               </div>
               <div>
                <p>(02)</p>
                <img className="w-24 h-24" src={pic2}/>
               </div>
               <div>
                <p>(03)</p>
                <img  className="w-24 h-24" src={pic3}/>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
