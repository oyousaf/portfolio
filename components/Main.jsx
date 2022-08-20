import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-300">
            Welcome to my Personal Portfolio
          </p>
          <h1 className="py-4">
            Hi, I&apos;m <span className="text-[#d4af37]">Omar</span>
          </h1>
          <h1 className="py-2">An Enthusiastic Frontend Developer</h1>
          <p className="py-4 text-[#efcf98] max-w-[70%] m-auto">
            I love creating maintainable, responsive and scalable apps
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/oyousaf/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/oyousaf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="mailto:o_yousaf@live.co.uk"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a
              href="../assets/OY new.pdf"
              target="_blank"
              rel="noreferrer"
              download
            >
              <div className="rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>

          <div className="flex justify-center py-16">
            <Link href="/#about">
              <div className="animate-bounce rounded-full bg-[#efcf98] hover:bg-[#d4af37] shadow-lg shadow-[#efcf98] text-[#546E74] hover:text-white p-4 cursor-pointer hover:scale-110 ease-in duration-300e">
                <HiOutlineChevronDoubleDown size={30} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
