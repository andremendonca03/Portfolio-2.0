"use client";

import React from "react";
import data from "@/content/skillAreas.json";

import SideLine from "./SideLine";
import SideTabs from "./SideTabs";
import ContentTabs from "./ContentTabs";

const SkillAreas = () => {
  const { skillAreas }: { skillAreas: SkillAreas[] } = data;

  const [activeTab, setActiveTab] = React.useState<number>(0);

  return (
    <section className="container py-10 flex justify-between items-start gap-5" id="skills">
      <div className="flex gap-3">
        <SideLine skillAreas={skillAreas} activeTab={activeTab} />

        <SideTabs skillAreas={skillAreas} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <ContentTabs skillAreas={skillAreas} activeTab={activeTab} />
    </section>
  );
};

export default SkillAreas;
