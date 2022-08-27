import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, bgImg, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#efcf98] rounded-xl p-4 group hover:bg-gradient-to-r from-[#d4af37] to-[#efcf98]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={bgImg}
        alt={bgImg}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-3xl text-[#546E74] tracking-wider text-center">
          {title}
        </h3>
        <Link href={projectUrl} target="_blank">
          <p className="text-center p-3 rounded-lg bg-[#546E74] font-bold text-large cursor-pointer">
            Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
