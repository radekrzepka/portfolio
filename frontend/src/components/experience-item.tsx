import { Experience } from "@/app/types/experience";
import { FC } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface ExperienceItemProps {
   experience: Experience;
}

const ExperienceItem: FC<ExperienceItemProps> = ({ experience }) => {
   const [startYear, startMonth] = experience.attributes.startDate.split("-");
   const [endYear, endMonth] = experience.attributes.endDate
      ? experience.attributes.endDate.split("-")
      : ["", ""];

   return (
      <div className="mb-8 xl:grid xl:grid-cols-[200px_auto]">
         <div className="mt-2 text-xs font-bold uppercase lg:flex-grow-[2] lg:pr-20">
            <p className="inline">
               {startMonth}.{startYear}
            </p>
            <p className="inline"> - </p>
            <p className="inline">
               {experience.attributes.endDate
                  ? `${endMonth}.${endYear}`
                  : " nadal"}
            </p>
         </div>
         <div className="">
            <p className="mb-2 text-xl">{experience.attributes.jobTitle}</p>
            <p className="mb-4">{experience.attributes.companyName}</p>
            <ReactMarkdown>{experience.attributes.description}</ReactMarkdown>
         </div>
      </div>
   );
};

export default ExperienceItem;
