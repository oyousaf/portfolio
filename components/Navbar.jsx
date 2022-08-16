import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaPhone } from "react-icons/fa";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#546E74");
  const [linkColour, setLinkColour] = useState("#CCCCC4");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/defi" ||
      router.asPath === "/dglow" ||
      router.asPath === "/gop" ||
      router.asPath === "/notflix" ||
      router.asPath === "/pollards" ||
      router.asPath === "/weather"
    ) {
      setNavBg("transparent");
      setLinkColour("#ecf0f3");
    } else {
      setNavBg("#546E74");
      setLinkColour("#CCCCC4");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
    style={{ backgroundColor: `${navBg}`}}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/../public/assets/navLogo.png"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColour}`}} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase text-gray-300 hover:text-gray-100">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase text-gray-300 hover:text-gray-100">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase text-gray-300 hover:text-gray-100">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase text-gray-300 hover:text-gray-100">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase text-gray-300 hover:text-gray-100">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#63B7B7] p-10 ease-in duration-300"
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  onClick={handleNav}
                  className="cursor-pointer"
                  src="/../public/assets/navLogo.png"
                  width={40}
                  height={40}
                  alt="logo"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-[#efcf98] p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-[#efcf98] my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Enthusiastic Frontend Dev
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-gray-300 hover:text-gray-100"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-gray-300 hover:text-gray-100"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-gray-300 hover:text-gray-100"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-gray-300 hover:text-gray-100"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-gray-300 hover:text-gray-100"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#efcf98]">
                Get in Touch
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a href="https://www.linkedin.com/in/oyousaf/" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-100 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="mailto:o_yousaf@live.co.uk" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-100 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </a>
                <a href="tel:07597866002" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-100 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaPhone />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
