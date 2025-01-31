import React from "react";
import logo from "../assets/Interagency.png";
const Details = () => {
  return (
    <>
      <div className=" text-white p-6 bg-[#151C02]">
        <div className="wholediv flex flex-col">
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 ">
            <div className="pt-8 border-b-2 lg:border-r-2 pb-10">
              <img src={logo} />
            </div>


            <div className="sm:w-full border-b-2 pt-8 lg:border-r-2 flex flex-row justify-end">
              <div className="flex flex-col px-12 pb-12">
                <p className="text-lg font-hagrid font-extrabold">Pages</p>
                <ul className="font-binger">
                  <li>Home</li>
                  <li>Work</li>
                  <li>Agency</li>
                  <li>Team</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="flex flex-col px-12 pb-12">
                <p className="text-lg font-hagrid font-extrabold">Services</p>
                <ul className="font-binger">
                  <li>Services</li>
                  <li>Team</li>
                  <li>Clients</li>
                  <li>Careers</li>
                  <li>Project Index</li>
                </ul>
              </div>
            </div>


            <div className="border-b-2 p-8 flex justify-center sm:justify-end">
              <p className="text-lg font-hagrid font-extrabold w-40">
                Anton Agency Miami, USA Salt Lake, USA
              </p>
            </div>
          </div>

          {/* contact */}
          
          <div className="mt-8 mb-4 flex justify-center sm:flex-row flex-col gap-4">
              <div className="font-normal font-binger text-center sm:text-xl md:text-2xl lg:text-6xl border rounded-full border-white  p-4">
                INSTAGRAM
              </div>
              <div className="font-normal font-binger text-center sm:text-xl md:text-2xl lg:text-6xl border rounded-full border-white  p-4">
                FACEBOOK
              </div>
              <div className="font-normal font-binger text-center sm:text-xl  md:text-2xl lg:text-6xl border rounded-full border-white  p-4">
                LINKEDIN
              </div>
              <div className="font-normal font-binger text-center  sm:text-xl  md:text-2xl  lg:text-6xl border rounded-full border-white  p-4">
                DRIBBLE
              </div>
              <div className="font-normal font-binger  text-center  sm:text-xl  md:text-2xl lg:text-6xl border rounded-full border-white  p-4">
                BEHANCE
              </div>
              
          </div>


        </div>

        
        
      </div>
    </>
  );
};

export default Details;
