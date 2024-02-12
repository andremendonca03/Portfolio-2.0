"use client";

import React from "react";
import data from "@/content/skillAreas.json";

import SideLine from "./SideLine";
import SideTabs from "./SideTabs";
import ContentTabs from "./ContentTabs";

const SkillAreas = () => {
  const { skillAreas }: { skillAreas: SkillAreas[] } = data;

  const [activeTab, setActiveTab] = React.useState<number>(0);


  React.useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  return (
    <section className="container py-7 flex justify-between items-start gap-5">
      <div className="flex gap-3">
        <SideLine skillAreas={skillAreas} activeTab={activeTab} />

        <SideTabs skillAreas={skillAreas} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <ContentTabs skillAreas={skillAreas} activeTab={activeTab} />
    </section>
  );
};

export default SkillAreas;
