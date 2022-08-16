import React from "react";
import defi from "../public/assets/projects/defi.png";
import dglow from "../public/assets/projects/dglow.png";
import gop from "../public/assets/projects/gop.png";
import notflix from "../public/assets/projects/notflix.png";
import pollards from "../public/assets/projects/pollards.png";
import weather from "../public/assets/projects/weather.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div name="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#d4af37]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectItem title="DeFi" bgImg={defi} projectUrl="/defi" />
          <ProjectItem title="Desi Glow" bgImg={dglow} projectUrl="/dglow" />
          <ProjectItem title="GoP" bgImg={gop} projectUrl="/gop" />
          <ProjectItem title="Notflix" bgImg={notflix} projectUrl="/notflix" />
          <ProjectItem
            title="Pollards"
            bgImg={pollards}
            projectUrl="/pollards"
          />
          <ProjectItem title="Weather" bgImg={weather} projectUrl="/weather" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
