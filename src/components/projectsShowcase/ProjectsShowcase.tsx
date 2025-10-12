import Link from "next/link";
import React from "react";
import ProjectCover from "./ProjectCover";

const ProjectsShowcase = () => {
  return (
    <section className="container py-7" id="showcase">
      <span className="block w-max font-small text-r-text-muted mb-5">
        - Projects Showcase -
      </span>

      <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-7 relative after:absolute after:bg-gradient-to-t after:from-r-bg after:to-90% md:after:to-70% after:w-full after:h-full after:inset-0">
        <div className="flex flex-col gap-3 md:gap-5">
          <ProjectCover
            src={"/the-safe/cover.png"}
            alt={"The Safe Project Cover"}
          />
          <ProjectCover
            src={"/gymfit/cover.png"}
            alt={"Gymfit Project Cover"}
          />
        </div>
        <div className="flex flex-col gap-3 md:gap-5 mt-4 md:mt-6">

          <ProjectCover
            src={"/giancarlo/cover.png"}
            alt={"Giancarlo Project Cover"}
          />
          <ProjectCover
            src={"/fantastic-animals/cover.jpg"}
            alt={"Fantastic Animals Cover"}
          />
        </div>
      </div>

    </section>
  );
};

export default ProjectsShowcase;
