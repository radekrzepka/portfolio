import type { Experience } from "../types/experience";
import ExperienceItem from "@/components/experience-item";

const getExperiences = async () => {
   const res = await fetch(
      `https://portfolio-e7x6z.ondigitalocean.app/api/experiences`,
   );

   if (!res.ok) {
      throw new Error("Failed to fetch data");
   }

   return res.json();
};

export default async function Experience() {
   const { data: experiences } = await getExperiences();

   experiences.sort((experience1: Experience, experience2: Experience) => {
      const [year1, month1] = experience1.attributes.startDate.split("-");
      const [year2, month2] = experience2.attributes.startDate.split("-");

      if (parseInt(year1) > parseInt(year2)) return 1;
      else if (parseInt(year1) < parseInt(year2)) return -1;
      else return parseInt(month1) - parseInt(month2);
   });

   return (
      <>
         <h2
            className="mb-6 mt-4 text-3xl font-bold md:text-5xl"
            id="experience"
         >
            Doświadczenie
         </h2>
         {experiences
            .sort((experience1: Experience, experience2: Experience) => {
               const [year1, month1] =
                  experience1.attributes.startDate.split("-");
               const [year2, month2] =
                  experience2.attributes.startDate.split("-");

               if (parseInt(year1) > parseInt(year2)) return -1;
               else if (parseInt(year1) < parseInt(year2)) return 1;
               else return parseInt(month1) - parseInt(month2);
            })
            .map((experience: Experience) => (
               <ExperienceItem key={experience.id} experience={experience} />
            ))}
      </>
   );
}
