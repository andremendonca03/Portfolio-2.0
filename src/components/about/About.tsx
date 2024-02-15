import Link from "next/link";
import { Switch } from "@/components/ui/switch";


const About = () => {
  return (
    <section className="container py-4" id="about-me">
      <div className="flex gap-2 items-center max-w-[790px] pb-3 border-b border-n-grey mb-5">
        <span className="block max-w-fit font-small text-r-text-muted -rotate-90 -ml-4 mb-3 td-150">- Toggle -</span>

        <Switch className="mb-2" />
      </div>

      <div className="max-w-[790px] font-copy text-r-text-muted mb-5">
        <p className="mb-3">
          I am a <strong className="text-r-text font-bold">Front-End Developer</strong> who is passionate about coding and creating well designed applications. The feeling of challenge is what makes me determined to solve problems and work out the best solutions, always aiming to level up.
        </p>
        <p className="mb-3">
          As a student, I have completed many advanced courses in different areas of programming and design, and I am eager to discover and learn much more.As a worker, I am hard-worker completely adaptable for any work environment to develop and grow as a team or by myself.
        </p>
      </div>

      <Link href="#my-work" scroll={false} className="button border-r-accent ml-0 text-r-text shadow-[0_0_4px_1px] shadow-r-accent-80 hover:bg-r-accent-80 hover:text-n-white hover:shadow-lg hover:shadow-r-accent-80">View Work</Link>
    </section>
  )
}

export default About