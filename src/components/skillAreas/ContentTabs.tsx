import React from "react";
import cn from "@/constants/filters/cn";
import Link from "next/link";

const ContentTabs = ({
  skillAreas,
  activeTab,
}: {
  skillAreas: SkillAreas[];
  activeTab: number;
}) => {
  return (
    <div className="max-w-[830px] grid relative">
      <span className="block w-max font-small text-r-text-muted rotate-90 absolute top-4 -right-[35px]">- Technologies -</span>

      {skillAreas.map((item, index) => {
        return (
          <div
            key={index}
            className={cn(
              `col-start-1 row-start-1 mr-4 translate-y-4 invisible opacity-0`,
              {
                "translate-y-0 visible opacity-100 transition duration-300":
                  activeTab === index,
              }
            )}
          >
            <div
              className="text-r-text-muted [&_p]:mb-3 [&_strong]:text-r-text [&_strong]:font-bold last:[&_p]:mb-5"
              dangerouslySetInnerHTML={{ __html: item.copy }}
            ></div>

            <Link
              className={cn(
                `button border-${item.color} ml-0 mb-4 text-r-text hover:bg-${item.color}-80 hover:text-n-white hover:shadow-lg hover:shadow-${item.color}-80`
              )}
              href={item.link.url}
            >
              {item.link.title}
            </Link>

            <hr className="border-n-grey mb-4" />

            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {item.skills.map((skill, i) => {
                return (
                  <li key={i} className="flex gap-2">
                    <span
                      className={`block size-[8px] bg-${item.color} rounded-full relative top-2`}
                    ></span>
                    <h3 className="font-bold text-r-text">{skill}</h3>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ContentTabs;
