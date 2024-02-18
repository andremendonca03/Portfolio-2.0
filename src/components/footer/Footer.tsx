import React from "react";
import LinkedinIcon from "../icons/LinkedinIcon";
import GithubIcon from "../icons/GithubIcon";
import DribbbleIcon from "../icons/DribbbleIcon";

const Footer = () => {
  return (
    <footer className="container py-6 relative" id="contact">
      <span className="block w-max font-small text-r-text-muted rotate-90 absolute top-7 right-0">
        - Contact Me -
      </span>

      <div className="mr-5">
        <h2 className="font-heading4 text-r-text mb-2">Get in touch</h2>
        <p className="text-r-text-muted mb-3">
          Want to know more about me or have any enquiries? Let’s chat!
        </p>

        <p className="text-r-text-muted">
          Shout me an email at{" "}
          <a
            href="mailto:andremendonca.033@gmail.com"
            className="inline font-bold text-r-text hover:underline"
          >
            andremendonca.033@gmail.com
          </a>
        </p>
        <p className="text-r-text-muted mb-5">
          Or drop me a call at{" "}
          <a
            href="tel:+61451009412"
            className="inline font-bold text-r-text hover:underline"
          >
            +61 451 009 412
          </a>
        </p>

        <p className="text-r-text-muted mb-4">
          You can also find more about me and my work on the links below:
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/andremendonca03"
            target="_blank"
            className="group rounded bg-r-accent p-2 border-2 border-r-accent hover:bg-transparent"
          >
            <LinkedinIcon className="size-[18px] group-hover:[&>path]:fill-r-text" />
          </a>

          <a
            href="https://github.com/andremendonca03"
            target="_blank"
            className="group rounded bg-r-accent p-2 border-2 border-r-accent hover:bg-transparent"
          >
            <GithubIcon className="size-[18px] group-hover:[&>path]:fill-r-text" />
          </a>

          <a
            href="https://dribbble.com/andremendonca03"
            target="_blank"
            className="group rounded bg-r-accent p-2 border-2 border-r-accent hover:bg-transparent"
          >
            <DribbbleIcon className="size-[18px] group-hover:[&>path]:fill-r-text" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
