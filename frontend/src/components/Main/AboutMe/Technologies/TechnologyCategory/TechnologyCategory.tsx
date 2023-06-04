import { useQuery, gql } from "@apollo/client";

type Props = {
	name: string;
	displayName: string;
};

type QueryData = {
	technologies: {
		data: [
			{
				attributes: {
					name: string;
					icon: {
						data: {
							attributes: {
								url: string;
								alternativeText: string;
							};
						};
					};
				};
			}
		];
	};
};

const TECHNOLOGYCATEGORY = gql`
	query GetTechnologies($name: String!) {
		technologies(filters: { category: { eq: $name } }, sort: "importance") {
			data {
				attributes {
					name
					icon {
						data {
							attributes {
								url
								alternativeText
							}
						}
					}
				}
			}
		}
	}
`;

const TechnologyCategory = (props: Props) => {
	const { loading, error, data } = useQuery<QueryData>(TECHNOLOGYCATEGORY, {
		variables: { name: props.name },
	});

	if (loading || error) return;

	return (
		<div>
			<p>{props.displayName}</p>
			<div className="flex flex-wrap">
				{data?.technologies.data.map(technology => (
					<div
						key={technology.attributes.name}
						className="m-1 flex w-max flex-col items-center justify-center bg-whiteHeadersColor"
					>
						<img
							className="h-6 w-6"
							src={`http://localhost:1337${technology.attributes.icon.data?.attributes.url}`}
							alt={
								technology.attributes.icon.data?.attributes.alternativeText
									? technology.attributes.icon.data?.attributes.alternativeText
									: `Ikona ${technology.attributes.name}`
							}
						/>
						<p>{technology.attributes.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default TechnologyCategory;
