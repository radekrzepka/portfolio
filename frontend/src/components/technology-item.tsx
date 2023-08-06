"use client";

import { Technology } from "@/app/types/technology";
import { FC } from "react";
import Image from "next/image";

interface TechnologyItemProps {
   technology: Technology;
}

const TechnologyItem: FC<TechnologyItemProps> = ({ technology }) => {
   const iconSrc = `https://portfolio-e7x6z.ondigitalocean.app${technology.attributes.icon.data.attributes.url}`;

   return (
      <div className="m-1 flex w-max flex-col items-center justify-center rounded-md bg-secondary px-6 py-3 text-base text-text shadow-xl">
         <Image
            width={40}
            height={40}
            unoptimized={true}
            loader={() => iconSrc}
            src={iconSrc}
            alt={`Ikona ${technology.attributes.name}`}
         />
         <p className="font-bold">{technology.attributes.name}</p>
      </div>
   );
};

export default TechnologyItem;
