"use client";

import { Project } from "@/app/types/project";
import { FC } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import GitHubIcon from "./../assets/github_white.svg";
import WebIcon from "./../assets/web.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectItemProps {
   project: Project;
}

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
   const [active, setActive] = useState(false);
   const imageSrc = `https://portfolio-e7x6z.ondigitalocean.app${project.attributes.image.data[0].attributes.url}`;

   const handleMouseOver = () => {
      setActive(true);
   };

   const handleMouseOut = () => {
      setActive(false);
   };

   return (
      <button
         className={`block rounded-xl p-4 pt-2 text-left lg:flex lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg`}
         // href={project.attributes.url_live}
         // target="_blank"
         rel="noopener noreferrer"
         onMouseOver={handleMouseOver}
         onMouseOut={handleMouseOut}
      >
         <Image
            src={imageSrc}
            alt={`Zdjęcie projektu ${project.attributes.name}`}
            className="my-6 rounded shadow-xl md:w-1/2 lg:mr-3 lg:h-full"
            blurDataURL={"./../assets/1x1.png"}
            unoptimized={true}
            loader={() => imageSrc}
            width={500}
            height={250}
            placeholder="blur"
         />
         <div className="lg:ml-6">
            <p className="my-6 text-3xl">{project.attributes.name}</p>
            <ReactMarkdown className="markdown">
               {project.attributes.description}
            </ReactMarkdown>
            <div className="mt-6 flex flex-wrap gap-3">
               {project.attributes.technologies.data.map((technology) => (
                  <div
                     key={technology.id}
                     className="mb-2 w-max rounded bg-secondary px-4 py-2"
                  >
                     {technology.attributes.name}
                  </div>
               ))}
            </div>

            <div className="ml-1 mt-6 flex">
               <Link
                  href={project.attributes.url_code}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Image
                     src={GitHubIcon}
                     alt={`Ikona przenosząca do Githuba projektu ${project.attributes.name}`}
                     className="mr-6 h-7 w-7"
                  />
               </Link>
               <Link
                  href={project.attributes.url_live}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Image
                     src={WebIcon}
                     alt={`Ikona przenosząca do strony projektu ${project.attributes.name}`}
                     className="mr-6 h-7 w-7"
                  />
               </Link>
            </div>
         </div>
      </button>
   );
};

export default ProjectItem;
