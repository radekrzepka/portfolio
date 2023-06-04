import { useQuery, gql } from "@apollo/client";
import Project from "./Project/Project";

type QueryData = {
	projects: {
		data: [
			{
				attributes: {
					name: string;
					image: {
						data: {
							attributes: {
								url: string;
								alternativeText: string;
							};
						};
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
		];
	};
};

const PROJECTS = gql`
	query GetProjects {
		projects(sort: "importance") {
			data {
				attributes {
					name
					image {
						data {
							attributes {
								url
								alternativeText
							}
						}
					}
					description
					url_live
					url_code
					importance
					technologies(sort: "name") {
						data {
							attributes {
								name
							}
						}
					}
				}
			}
		}
	}
`;

const Projects = () => {
	const { loading, error, data } = useQuery<QueryData>(PROJECTS);

	if (loading || error) return;

	return (
		<div>
			<p
				className="mb-6 mt-4 text-3xl font-bold text-whiteHeadersColor lg:text-5xl"
				id="projects"
			>
				Projekty
			</p>
			{data?.projects.data.map(project => (
				<Project
					key={project.attributes.importance}
					data={project.attributes}
				/>
			))}
		</div>
	);
};

export default Projects;
