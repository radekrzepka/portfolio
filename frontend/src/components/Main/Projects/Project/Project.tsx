import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import GitHubIcon from "../../../../assets/github_white.svg";
import WebIcon from "../../../../assets/web.png";

interface Props {
	data: {
		name: string;
		image: {
			data: [
				{
					attributes: {
						url: string;
						alternativeText: string;
					};
				}
			];
		};
		desciption: string;
		url_live: string;
		url_code: string;
		importance: number;
		technologies: {
			data: [
				{
					attributes: {
						name: string;
					};
				}
			];
		};
	};
}

const Project: React.FC<Props> = ({ data }) => {
	return (
		<div className="lg:flex">
			<img
				src={`http://localhost:1337${data.image.data[0].attributes.url}`}
				alt={`Zdjęcie projektu ${data.name}`}
				className="mb-6 rounded border border-whiteTextColor shadow-xl md:w-1/2 lg:mr-3 lg:h-full lg:w-1/2"
			/>
			<div className="lg:ml-6">
				<p className="mb-6 text-3xl text-whiteHeadersColor">{data.name}</p>
				<ReactMarkdown>{data.description}</ReactMarkdown>
				<div className="mt-6 flex flex-wrap gap-3 ">
					{data.technologies.data.map(technology => (
						<div
							key={technology.attributes.name}
							className="mb-2 w-max rounded bg-[#112240] px-4 py-2 text-whiteHeadersColor"
						>
							{technology.attributes.name}
						</div>
					))}
				</div>

				<div className="my-6 ml-1 flex">
					<a href={data.url_code} target="_blank" rel="noopener noreferrer">
						<img
							src={GitHubIcon}
							alt="Ikona przenosząca do Githuba tego projektu"
							className="mr-6 h-7 w-7"
						/>
					</a>
					<a href={data.url_live} target="_blank" rel="noopener noreferrer">
						<img
							src={WebIcon}
							alt="Ikona przenosząca do wersji live tego projektu"
							className="h-7 w-7"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
