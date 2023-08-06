import { FC } from "react";
import Image from "next/image";

interface SocialMediaItemProps {
   href: string;
   imgSrc: string;
   imgAlt: string;
}

const SocialMediaItem: FC<SocialMediaItemProps> = ({
   href,
   imgSrc,
   imgAlt,
}) => {
   return (
      <li className="">
         <a href={href} target="_blank" rel="noopener noreferrer">
            <Image
               src={imgSrc}
               alt={`Ikonka ${imgAlt}`}
               className="h-10 w-10 brightness-[111%] contrast-[92%] hue-rotate-[158deg] invert-[59%] saturate-0 sepia-0 hover:brightness-[110%] hover:contrast-[94%] hover:hue-rotate-[177deg] hover:invert-[85%] hover:saturate-[135%] hover:sepia-[4%]"
            />
         </a>
      </li>
   );
};

export default SocialMediaItem;
