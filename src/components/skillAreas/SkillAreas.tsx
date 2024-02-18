"use client";

import React from "react";
import data from "@/content/skillAreas.json";

import SideLine from "./SideLine";
import SideTabs from "./SideTabs";
import ContentTabs from "./ContentTabs";
import SkillAreasAccordion from "./SkillAreasAccordion";

const SkillAreas = () => {
  const { skillAreas }: { skillAreas: SkillAreas[] } = data;

  const [activeTab, setActiveTab] = React.useState<number>(0);

  return (
    <section className="container pb-6 pt-10 md:py-10 relative" id="skills">
      <span className="block w-max font-small text-r-text-muted absolute top-8">- Skill Areas -</span>

      <div className="hidden md:flex justify-between items-start gap-5">
        <div className="flex gap-3">
          <SideLine skillAreas={skillAreas} activeTab={activeTab} />

          <SideTabs skillAreas={skillAreas} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <ContentTabs skillAreas={skillAreas} activeTab={activeTab} />
      </div>

      <SkillAreasAccordion skillAreas={skillAreas} activeTab={activeTab} setActiveTab={setActiveTab}  />
    </section>
  );
};

export default SkillAreas;
