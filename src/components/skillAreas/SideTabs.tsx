import cn from "@/constants/filters/cn";
import React from "react";

const SideTabs = ({
  skillAreas,
  activeTab,
  setActiveTab,
}: {
  skillAreas: SkillAreas[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}) => {
  function handleActiveTab(index: number) {
    setActiveTab(index);
  }

  return (
    <div className="max-w-[300px]">
      {skillAreas.map((item, index) => {
        return (
          <h2
            key={index}
            className={cn(
              `font-heading4 text-r-text pb-4 px-3 border-b border-n-grey mb-4 last:mb-0 last:border-0 last:pb-2 opacity-60 td-150 cursor-pointer`,
              { "opacity-100": activeTab === index }
            )}
            onClick={() => {
              handleActiveTab(index);
            }}
          >
            {item.title}
          </h2>
        );
      })}
    </div>
  );
};

export default SideTabs;
