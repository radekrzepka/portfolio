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
   const imageSrc = `https://portfolio-e7x6z.ondigitalocean.app${project.attributes.image.data[0].attributes.url}`;

   return (
      <button
         className={`block rounded-xl p-4 pt-2 text-left hover:bg-slate-800/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg lg:grid lg:grid-cols-[350px_auto]`}
         onClick={() => {
            window.open(project.attributes.url_live, "_blank");
         }}
      >
         <Image
            src={imageSrc}
            alt={`Zdjęcie projektu ${project.attributes.name}`}
            className="my-6 rounded shadow-xl lg:mr-3 "
            blurDataURL={"./../assets/1x1.png"}
            unoptimized={true}
            loader={() => imageSrc}
            width={350}
            height={175}
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
               <button
                  onClick={() => {
                     window.open(project.attributes.url_code, "_blank");
                  }}
               >
                  <Image
                     src={GitHubIcon}
                     alt={`Ikona przenosząca do Githuba projektu ${project.attributes.name}`}
                     className="mr-6 h-7 w-7"
                  />
               </button>
               <button
                  onClick={() => {
                     window.open(project.attributes.url_live, "_blank");
                  }}
               >
                  <Image
                     src={WebIcon}
                     alt={`Ikona przenosząca do strony projektu ${project.attributes.name}`}
                     className="mr-6 h-7 w-7"
                  />
               </button>
            </div>
         </div>
      </button>
   );
};

export default ProjectItem;
