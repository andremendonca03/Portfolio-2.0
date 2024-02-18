"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import cn from "@/constants/filters/cn";

const SkillAreasAccordion = ({
  skillAreas,
  activeTab,
  setActiveTab,
}: {
  skillAreas: SkillAreas[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="md:hidden"
      defaultValue={"0"}
      onValueChange={(value) => {
        setActiveTab(Number(value));
      }}
    >
      {skillAreas.map((item, index) => {
        return (
          <AccordionItem
            value={`${index}`}
            key={index}
            className="border-b-r-text-muted last:border-0"
          >
            <AccordionTrigger className="font-heading4 text-r-text hover:decoration-none">
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    `size-3 bg-${item.color} rounded-full relative z-1`,
                    {
                      [`shadow-${item.color} shadow-[0_0_3px_2px]`]:
                        activeTab === index,
                      "bg-r-bg shadow-[0_0_3px_1px] shadow-r-text-muted":
                        index === 2,
                      "shadow-[0_0_4px_2px]": index === 2 && activeTab === 2,
                    }
                  )}
                ></span>
                <em>{item.title}</em>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div
                className="font-copy text-r-text-muted [&_p]:mb-3 [&_strong]:text-r-text [&_strong]:font-bold last:[&_p]:mb-5"
                dangerouslySetInnerHTML={{ __html: item.copy }}
              ></div>

              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                {item.skills.map((skill, i) => {
                  return (
                    <li key={i} className="flex gap-2">
                      <span
                        className={`block size-[8px] bg-${item.color} rounded-full relative top-2`}
                      ></span>
                      <h3 className="font-copy font-bold text-r-text">
                        {skill}
                      </h3>
                    </li>
                  );
                })}
              </ul>

              <Link
                className={cn(
                  `button border-${item.color} ml-0 mb-5 text-n-white bg-${item.color}-80 hover:bg-transparent hover:text-r-text hover:shadow-lg hover:shadow-${item.color}-80`
                )}
                href={item.link.url}
              >
                {item.link.title}
              </Link>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default SkillAreasAccordion;
