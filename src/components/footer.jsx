import React from "react";
import { FaHouse,FaMagnifyingGlass, FaCompass,FaUser } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="h-[60px] w-[90%] bg-slate-700 rounded-3xl flex justify-around p-3 absolute bottom-2 left-[18px] text-2xl ">
        <button className="text-white hover:text-sky-500  " ><FaHouse className="bg-transparent "/></button>
        <button className="text-white hover:text-sky-500  "> <FaMagnifyingGlass  className="bg-transparent"/></button>
        <button className="text-white hover:text-sky-500  "> < FaCompass className="bg-transparent"/></button>
        <button className="text-white hover:text-sky-500  "><FaUser className="bg-transparent"/> </button>
      </div>
    </>
  );
}

export default Footer;
