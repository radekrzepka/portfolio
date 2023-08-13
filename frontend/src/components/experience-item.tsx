"use client";

import { Experience } from "@/app/types/experience";
import { FC } from "react";

interface ExperienceItemProps {
   experience: Experience;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ experience }) => {
   const [startYear, startMonth] = experience.attributes.startDate.split("-");
   const [endYear, endMonth] = experience.attributes.endDate
      ? experience.attributes.endDate.split("-")
      : ["", ""];

   return (
      <button
         className="mb-8 w-full rounded-xl p-4 pl-1 text-left hover:bg-slate-800/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg lg:pl-4 xl:grid xl:grid-cols-[200px_auto]"
         onClick={() => {
            window.open(experience.attributes.description, "_blank");
         }}
      >
         <div className="mt-2 text-xs font-bold uppercase lg:flex-grow-[2] lg:pr-20">
            <p className="inline">
               {startMonth}.{startYear}
            </p>
            <p className="inline"> - </p>
            <p className="inline">
               {experience.attributes.endDate
                  ? `${endMonth}.${endYear}`
                  : "nadal"}
            </p>
         </div>
         <div>
            <p className="text-3xl">{experience.attributes.jobTitle}</p>
            <p className="mb-4">{experience.attributes.companyName}</p>
         </div>
      </button>
   );
};

export default ExperienceItem;
