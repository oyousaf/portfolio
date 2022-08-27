import React from "react";
import Image from "next/image";
import Link from "next/link";
import notflixImg from "../public/assets/projects/notflix.png";
import { RiRadioButtonFill, RiArrowLeftCircleFill } from "react-icons/ri";

const notflix = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={notflixImg}
          alt="notflix"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="py-2">Notflix</h2>
          <h3>React / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase text-xl tracking-widest text-[#d4af37]">
            Project
          </p>
          <h2>Overview</h2>
          <p>
            A cool Netflix clone built using React, Tailwind and Firebase.
          </p>
          <a href="https://react-notflix.web.app" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 hover:text-[#546E74] hover:font-bold">Demo</button>
          </a>
          <a href="https://github.com/oyousaf/notflix" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 hover:text-[#546E74] hover:font-bold">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-[#efcf98] rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-[#efcf98] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-[#efcf98] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-[#efcf98] py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <RiArrowLeftCircleFill className="cursor-pointer text-[#d4af37] hover:text-[#efcf98]" size={50} />
        </Link>
      </div>
    </div>
  );
};

export default notflix;
