import Technologies from "./Technologies/Technologies";

const AboutMe = () => {
	return (
		<div className="pt-20">
			<p
				className="mb-6 mt-4 text-5xl font-bold text-whiteHeadersColor"
				id="about-me"
			>
				Witaj !
			</p>
			<p className="mb-3">Jesem Radek i jestem front-end developerem.</p>
			<p className="mb-3">
				Specjalizuje się w tworzeniu stron i aplikacji internetowych. W
				przyszłości chciałbym rozwinąć swoje umijętności w kierunku back-endu,
				aby zostać full-stack developerem.
			</p>
			<h4 className="my-8 text-xl text-whiteHeadersColor">
				Technologie i narzędzia z któych korzystam:
			</h4>
			<Technologies></Technologies>
		</div>
	);
};

export default AboutMe;
