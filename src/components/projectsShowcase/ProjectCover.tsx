import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const ProjectCover = ({ src, alt }: { src: string; alt: string }) => {
  const aboutSectionRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: aboutSectionRef,
    //offset: ["0 1", "0.66 1"],
    offset: ["start end", "end end"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.65, 1]);

  return (
    <motion.div
      style={{ opacity: scaleProgress, scale: scaleProgress }}
      ref={aboutSectionRef}
    >
      <Image
        className="w-full h-auto aspect-[13/6] object-cover rounded-md"
        src={src}
        alt={alt}
        width={800}
        height={400}
        quality={100}
      />
    </motion.div>
  );
};

export default ProjectCover;
