import DribbbleIcon from "../icons/DribbbleIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import MailIcon from "../icons/MailIcon";

const Sidebar = () => {

  return (
    <nav className="fixed right-0 top-1/2 -translate-y-1/2 hidden flex-col gap-4 bg-r-bgGlassy backdrop-blur-sm py-4 px-3 rounded-tl rounded-bl td-150 z-10 md:flex">
      <a href="https://www.linkedin.com/in/andremendonca03/" target="_blank" className="group p-1">
        <LinkedinIcon className="size-[18px] [&>path]:fill-r-text group-hover:[&>path]:fill-[#0E76A8] [&>path]:td-150" />
      </a>

      <a href="https://github.com/andremendonca03" target="_blank" className="group p-1">
        <GithubIcon className="size-[18px] [&>path]:fill-r-text group-hover:[&>path]:fill-n-grey [&>path]:td-150" />
      </a>

      <a href="https://dribbble.com/andremendonca03" target="_blank" className="group p-1">
        <DribbbleIcon className="size-[18px] [&>path]:fill-r-text group-hover:[&>path]:fill-[#D8BAF1] [&>path]:td-150" />
      </a>

      <a href="mailto:andremendonca.033@gmail.com" className="group p-1">
        <MailIcon className="size-[18px] [&>path]:fill-r-text group-hover:[&>path]:fill-r-accent [&>path]:td-150" />
      </a>
    </nav>
  );
}

export default Sidebar;
