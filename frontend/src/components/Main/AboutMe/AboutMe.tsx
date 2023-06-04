import Technologies from "./Technologies/Technologies";

const AboutMe = () => {
	return (
		<div>
			<p className="mb-3 text-3xl text-whiteHeadersColor">Witaj !</p>
			<p className="mb-3">Jesem Radek i jestem front-end developerem.</p>
			<p className="mb-3">
				Specjalizuje się w tworzeniu stron i aplikacji internetowych. W
				przyszłości chciałbym rozwinąć swoje umijętności w kierunku back-endu,
				aby zostać full-stack developerem.
			</p>
			<p className="mb-3">Technologie z któych korzystam: </p>
			<Technologies></Technologies>
		</div>
	);
};

export default AboutMe;
