import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaPhone } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div name="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-[#d4af37]">
          Contact
        </p>
        <h2 className="py-4">Connect with Me</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                  alt="contact"
                  width="700"
                  height="500"
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 lg:p-[100px] items-center justify-center text-center">
            <p className="uppercase pt-8 text-[#d4af37]">
              Let&apos;s build something special together
            </p>
            <div className="flex py-4 gap-4 items-center justify-center text-center">
              <div className="rounded-full shadow-lg bg-[#d4af37] hover:bg-[#efcf98] shadow-[#d4af37] hover:shadow-[#efcf98] hover:text-[#546E74] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-lg bg-[#d4af37] hover:bg-[#efcf98] shadow-[#d4af37] hover:shadow-[#efcf98] hover:text-[#546E74] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-lg bg-[#d4af37] hover:bg-[#efcf98] shadow-[#d4af37] hover:shadow-[#efcf98] hover:text-[#546E74] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaPhone />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-4">
        <Link href="/" alt="top">
          <div className="animate-pulse rounded-full bg-[#d4af37] hover:bg-[#efcf98] shadow-[#d4af37] hover:shadow-[#efcf98] hover:text-[#546E74] p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
