import { Project } from "../types/project";
import ProjectItem from "@/components/project-item";

const getProjects = async () => {
   const res = await fetch(
      `https://portfolio-e7x6z.ondigitalocean.app/api/projects?populate=*`,
   );

   if (!res.ok) {
      throw new Error("Failed to fetch data");
   }
   return res.json();
};

export default async function Projects() {
   const projects = await getProjects();
   return (
      <>
         <h2
            className="mb-6 mt-4 text-3xl font-bold md:text-5xl"
            id="experience"
         >
            Projekty
         </h2>
         {projects.data
            .sort(
               (project1: Project, project2: Project) =>
                  project1.attributes.importance -
                  project2.attributes.importance,
            )
            .map((project: Project) => (
               <ProjectItem key={project.id} project={project} />
            ))}
      </>
   );
}
