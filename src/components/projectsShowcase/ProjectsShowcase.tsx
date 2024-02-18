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
            src={"/electract-energy/cover.png"}
            alt={"Electract Energy Cover"}
          />
          <ProjectCover
            src={"/giancarlo/cover.png"}
            alt={"Giancarlo Project Cover"}
          />
        </div>
      </div>

      <div className="py-5 md:py-6 relative after:absolute after:bg-gradient-to-b after:from-r-bg after:to-90% md:after:to-70% after:w-full after:h-full after:inset-0">
        <p className="max-w-[790px] text-r-text-muted text-center mx-auto mb-5 relative z-2">
          Explore all my personal and commercial{" "}
          <strong className="text-r-text font-bold">projects</strong> and
          understand the design choices, purpose of layout and take a look at
          the finalised products and source code.
        </p>

        <Link
          className="button text-n-white bg-r-accent-80 border-r-accent shadow-[0_0_4px_1px] shadow-r-accent-80 hover:text-r-text hover:bg-transparent hover:shadow-lg hover:shadow-r-accent-80 relative z-2"
          href={"/projects"}
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
