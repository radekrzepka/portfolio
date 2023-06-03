import GitHubIcon from "../../assets/github.svg";
import MailIcon from "../../assets/mail.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import SocialMediaItem from "./SocialMediaItem/SocialMediaItem";

const SideBar = () => {
	return (
		<div className="pt-16 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
			<div className="text-whiteHeadersColor">
				<h1 className="mb-6 text-5xl">Radosław Rzepka</h1>
				<h2 className="mb-6 text-2xl">Frontend developer</h2>
			</div>
			<nav className="text-xl uppercase">
				<ul>
					<li className="mb-5 transition hover:text-whiteHeadersColor">
						<a href="#about-me">O mnie</a>
					</li>
					<li className="mb-5 transition hover:text-whiteHeadersColor">
						<a href="#experience">Doświadczenie</a>
					</li>
					<li className="mb-5 transition hover:text-whiteHeadersColor">
						<a href="#projects">Projekty</a>
					</li>
					<li className="mb-5 transition hover:text-whiteHeadersColor">
						<a href="#contact">Kontakt</a>
					</li>
				</ul>
			</nav>
			<ul className="flex w-3/4 justify-between md:w-1/2 xl:w-1/4">
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

export default SideBar;
