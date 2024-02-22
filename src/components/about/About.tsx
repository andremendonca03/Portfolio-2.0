import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import cn from "@/constants/filters/cn";
import React from "react";
import { GlobalContext } from "@/contexts/GlobalContext";

const About = () => {
  const global = React.useContext(GlobalContext);

  return (
    <section className="container pt-7 pb-4" id="about-me">
      <div className="flex gap-2 items-center max-w-[790px] pb-3 border-b border-n-grey mb-5">
        <span className="block max-w-fit whitespace-nowrap overflow-hidden font-small text-r-text-muted -rotate-90 -ml-4 mb-3 td-150">
          - Toggle -
        </span>

        <Switch className="mb-2" />
      </div>

      <div className="grid">
        <div className={cn("col-start-1 row-start-1 max-w-[790px] font-copy text-r-text-muted mb-5 translate-y-4 opacity-0 invisible max-h-0", {
          "translate-y-0 opacity-100 visible max-h-full transition duration-300":
          global.themeMode === "devMode",
        })}>
          <p className="mb-3">
            I am a passionate
            <strong className="text-r-text font-bold"> Front-End Developer </strong>
            with over 4 years of hands-on experience in crafting engaging digital experiences. Throughout my career, I&apos;ve honed my expertise in addressing complex problems and delivering effective solutions, always focused on staying up-to-date with the latest technologies and best practices. 
          </p>
          <p className="mb-3">
            With a solid foundation built on years of practical experience and advanced coursework, <strong className="text-r-text font-bold">I excel in challenging environments</strong> where each obstacle presents an opportunity for growth. I&apos;m excited to continue pushing the boundaries of development, always striving to create captivating applications with a seamless user experience.
          </p>
        </div>

        <div className={cn("col-start-1 row-start-1 max-w-[790px] font-copy text-r-text-muted mb-5 translate-y-4 opacity-0 invisible max-h-0", {
          "translate-y-0 opacity-100 visible max-h-full transition duration-300":
          global.themeMode === "designMode",
        })}>
          <p className="mb-3">
            I am a creative
            <strong className="text-r-text font-bold"> UI/UX Designer </strong>
            who is eager to continue pushing the boundaries of design innovation, creating bold experiences that also drive tangible results for businesses, working closely with clients to craft brands that sell.
          </p>
          <p className="mb-3">
            While my primary focus lies in front-end development, my background in design provides me with a comprehensive understanding of the technical aspects of implementation. This dual expertise allows me to bridge the gap between design and development seamlessly, resulting in cohesive and impactful digital solutions.
          </p>
        </div>
      </div>

      <Link
        href={"#skills"}
        scroll={false}
        className="button border-r-accent ml-0 text-r-text shadow-[0_0_4px_1px] shadow-r-accent-80 hover:bg-r-accent-80 hover:text-n-white hover:shadow-lg hover:shadow-r-accent-80"
      >
        View Work
      </Link>
    </section>
  );
};

export default About;
