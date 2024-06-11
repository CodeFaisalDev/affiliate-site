import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 h-[60vh] md:h-[70vh] lg:h-[80vh] w-full justify-center -mt-16">
      <div className='bg-cover rounded-2xl md:rounded-none md:rounded-l-2xl bg-[url("/airpod.png")] shadow-xl'>
        <div className="flex flex-col justify-end">
          <h1 className="hidden md:block md:text-[4rem] font-black md:text-right mt-20 px-10 text-transform: uppercase">
            Find The Best <br /> Amazon Products With Us
          </h1>

          <h1 className="block w-[90vw] md:hidden text-[2rem] font-black text-right mt-10 md:mt-20 px-5 md:px-10 text-transform: uppercase">
            Find The Best Amazon Products With Us
          </h1>

          <div className="flex justify-end mt-5 md:mt-20 px-5 md:px-10 ">
            <button className="btn btn-secondary">
              <Link href="/">
                Find Now
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:grid grid-rows-2">
        <div className='rounded-tr-2xl bg-[url("/headphone.png")] bg-cover shadow-xl hover:scale-105  transition ease-in duration-1000'>
          <div className="flex flex-col justify-end">
            <h2 className="text-3xl font-bold text-right mt-5 p-5">
              Find The Best Headset <br /> with increadible discount <br /> and
              user rating
            </h2>

            <h3 className="text-right mt-20 text-2xl font-bold p-5">
              That will elivate your exprience <br /> with the best quality
            </h3>
          </div>
        </div>

        <div className='rounded-br-2xl bg-[url("/Best.png")] shadow-xl bg-cover border-b hover:scale-105 transition ease-in duration-1000'>
          <div>
            <h2 className="text-3xl font-bold text-left mt-5 p-5">
              Get the best deals <br /> on your favorate brands <br /> with
              incradible discount
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
