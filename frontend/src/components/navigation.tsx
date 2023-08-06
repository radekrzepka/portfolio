import GitHubIcon from "../assets/github.svg";
import MailIcon from "../assets/mail.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import SocialMediaItem from "@/components/social-media-item";
import NavigationLink from "./navigation-link";

const Navigation = () => {
   return (
      <div className="mt-4 flex h-fit flex-col justify-between gap-6 pb-4 lg:sticky lg:top-10 lg:h-[90vh] lg:w-1/2 lg:pb-0">
         <div>
            <h1 className="mb-6 text-5xl font-bold">Radosław Rzepka</h1>
            <h2 className="text-2xl">Frontend developer</h2>
         </div>
         <nav className="mb-5 text-xl uppercase">
            <ul className="flex flex-col gap-5">
               <NavigationLink href="/" label="O mnie" />
               <NavigationLink href="/experience" label="Doświadczenie" />
               <NavigationLink href="/projects" label="Projekty" />
            </ul>
         </nav>
         <ul className="flex gap-8">
            <SocialMediaItem
               href="https://github.com/radekrzepka"
               imgSrc={GitHubIcon}
               imgAlt="Ikona GitHuba"
            />
            <SocialMediaItem
               href="mailto:radoslawrzepka02@gmail.com"
               imgSrc={MailIcon}
               imgAlt="Ikona maila"
            />
            <SocialMediaItem
               href="https://www.linkedin.com/in/rados%C5%82aw-rzepka-a87157248/"
               imgSrc={LinkedinIcon}
               imgAlt="Ikona linkedina"
            />
         </ul>
      </div>
   );
};

export default Navigation;
