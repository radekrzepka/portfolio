"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

interface NavigationLinkProps {
   href: string;
   label: string;
}

const NavigationLink: FC<NavigationLinkProps> = ({ href, label }) => {
   const currentPath = usePathname();
   const isSelected = currentPath === href;

   return (
      <li>
         <Link
            href={href}
            className={classNames(
               "text-navText transition hover:text-text",
               isSelected && "!text-text",
            )}
         >
            {label}
         </Link>
      </li>
   );
};

export default NavigationLink;
