"use client";

import { GlobalContext } from "@/contexts/GlobalContext";
import { useScroll, motion, useTransform } from "framer-motion";
import React from "react";

const Strip = () => {
  const global = React.useContext(GlobalContext);

  let stripVerb = global.themeMode === "devMode" ? "CODING" : "DESIGNING";

  const { scrollYProgress } = useScroll();
  const scroll = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <section className="py-7 2xl:py-8 4xl:py-10">
      <div className="w-[150%] bg-r-accent py-6 shadow-[0_0_15px_15px] shadow-r-accent-80 -translate-x-6 -rotate-[10deg] 4xl:-rotate-[6deg]">
        <motion.div
          className="flex items-center gap-1"
          style={{ translateX: scroll }}
        >
          {Array.from({ length: 10 }).map((item, index) => {
            return (
              <div
                className="flex items-center gap-1 text-n-white font-heading1 font-bold text-[10rem]"
                key={index}
              >
                <em className="block">{stripVerb}</em>
                <em
                  className="block text-transparent"
                  style={{ WebkitTextStroke: "2px #ffffff" }}
                >
                  {stripVerb}
                </em>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Strip;
