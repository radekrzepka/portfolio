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
				Interesuje się w tworzeniem stron i aplikacji internetowych. W
				przyszłości chciałbym rozwinąć swoje umijętności w kierunku back-endu,
				aby zostać full-stack developerem.
			</p>
			<p className="mb-3">
				Zapraszam do zapoznania się z moimi projektami i skontaktowania się ze
				mną, jeśli jesteś zainteresowany współpracą.
			</p>
			<h4 className="my-8 text-xl text-whiteHeadersColor">
				Technologie i narzędzia:
			</h4>
			<Technologies></Technologies>
		</div>
	);
};

export default AboutMe;
