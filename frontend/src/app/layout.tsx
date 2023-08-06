import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Navigation from "@/components/navigation";
import classNames from "classnames";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Radosław Rzepka",
   description:
      "Witaj na moim portfolio. Odkryj moje projekty, umiejętności i doświadczenie w zakresie tworzenia stron internetowych.",
   keywords:
      "Radosław Rzepka, frontend developer, web developer, portfolio, projects, web developmente",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="pl">
         <body
            className={classNames(
               nunitoSans.className,
               "grid bg-background px-7 pt-6 text-text lg:grid-cols-2",
            )}
         >
            <Navigation />
            <main>{children}</main>
         </body>
      </html>
   );
}
