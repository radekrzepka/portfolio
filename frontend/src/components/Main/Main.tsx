import AboutMe from "./AboutMe/AboutMe";
import Experiences from "./Experiences/Experiences";
import Projects from "./Projects/Projects";

const Main = () => {
	return (
		<div className="min-h-screen pr-4 xl:ml-20">
			<AboutMe />
			<Experiences />
			<Projects />
		</div>
	);
};

export default Main;
