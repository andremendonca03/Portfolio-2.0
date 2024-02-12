import React from "react";
import cn from "@/constants/filters/cn";

const SideLine = ({
  skillAreas,
  activeTab,
}: {
  skillAreas: SkillAreas[];
  activeTab: number;
}) => {
  return (
    <div className="relative flex flex-col justify-between">
      <span className="block w-max font-small text-r-text-muted absolute -top-6">- Skill Areas -</span>

      <span className="block w-[2px] h-full bg-gradient-to-b from-s via-r-bg to-p absolute top-0 left-1/2 -translate-x-1/2"></span>

      {skillAreas.map((item, index) => {
        return (
          <div
            key={index}
            className={cn(`size-3 bg-${item.color} rounded-full relative z-1`, {
              [`shadow-${item.color} shadow-[0_0_3px_2px]`]:
                activeTab === index,
              "bg-r-bg shadow-[0_0_3px_1px] shadow-r-text-muted": index === 2,
              "shadow-[0_0_4px_2px]": index === 2 && activeTab === 2,
            })}
          ></div>
        );
      })}
    </div>
  );
};

export default SideLine;
