import TechnologyItem from "@/components/technology-item";
import { Technology } from "./types/technology";

const getTechnologies = async () => {
   const res = await fetch(
      `https://portfolio-e7x6z.ondigitalocean.app/api/technologies?populate=*`,
   );

   if (!res.ok) {
      throw new Error("Failed to fetch data");
   }

   return res.json();
};

export default async function Home() {
   const technologies = await getTechnologies();

   const categories = [
      {
         name: "Front-end",
         displayName: "Front-end",
      },
      {
         name: "Back-end",
         displayName: "Back-end",
      },
      {
         name: "Other",
         displayName: "Pozostałe",
      },
   ];
   return (
      <>
         <p className="mb-6 mt-4 text-3xl font-bold md:text-5xl">Witaj !</p>
         <p className="mb-3 lg:ml-4">
            Cześć! Jestem Radek, front-end developer z pasją do tworzenia
            funkcjonalnych i estetycznych stron oraz aplikacji internetowych
         </p>
         <p className="mb-3 lg:ml-4">
            Choć obecnie skupiam się na front-endzie, moją przyszłościową
            ambicją jest stać się full-stack developerem. Dlatego nieustannie
            poszerzam swoją wiedzę i umiejętności w dziedzinie back-endu, aby
            móc tworzyć kompleksowe rozwiązania i oferować użytkownikom pełne
            doświadczenie w korzystaniu z aplikacji.
         </p>
         <p className="mb-3 lg:ml-4">
            Jestem otwarty na współpracę i nowe wyzwania. Jeśli jesteś
            zainteresowany wspólnym projektem lub po prostu chciałbyś
            porozmawiać o naszych wspólnych pasjach, serdecznie zapraszam do
            skontaktowania się ze mną. Odwiedź moje portfolio, zapoznaj się z
            moimi projektami oraz doświadczeniem i dowiedz się więcej o mojej
            pracy. Chętnie poznam ludzi, którzy podzielają moje zainteresowania
            i miłość do rozwoju w branży technologicznej.
         </p>
         <p className="mb-3 lg:ml-4">
            Technologie i narzędzia z których korzystam:
         </p>
         {categories.map((category) => (
            <div key={category.name} className="lg:ml-4">
               <h4 className="text-xl">{category.displayName}</h4>
               <div className="flex flex-wrap">
                  {technologies.data
                     .filter(
                        (technology: Technology) =>
                           category.name === technology.attributes.category,
                     )
                     .sort(
                        (technology1: Technology, technology2: Technology) =>
                           technology1.attributes.importance -
                           technology2.attributes.importance,
                     )
                     .map((technology: Technology) => (
                        <TechnologyItem
                           key={technology.id}
                           technology={technology}
                        />
                     ))}
               </div>
            </div>
         ))}
      </>
   );
}
