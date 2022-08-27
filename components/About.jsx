import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#d4af37]">
            about
          </p>
          <h2 className="py-4">A little about me</h2>
          <p className="py-2 text-gray-200">
            I have spent numerous years dabbling with code and really enjoy the
            process of designing, developing and maintaining. I started out my
            coding journey with the use of technologies such as Dreamweaver,
            Bootstrap, Mobirise and Webflow but with time I have evolved to use
            Visual Studio Code, React, Next and Tailwind making for more
            versatile and manageable apps.
          </p>
          <p className="py-2 text-gray-200">
            I am always learning and adding to my skillset and hope to
            incorporate the MERN stack in the months to follow.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-200 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl hover:shadow-md shadow-[#efcf98] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/assets/about.png"
            alt="grad"
            width="500"
            height="700"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
