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
			<h4 className="text-xl text-whiteHeadersColor">{props.displayName}</h4>
			<div className="mb-8 flex flex-wrap">
				{data?.technologies.data.map(technology => (
					<div
						key={technology.attributes.name}
						className="m-1 flex w-max flex-col items-center justify-center rounded-md bg-[#112240] p-3 shadow-xl"
					>
						<img
							className="h-10 w-10"
							src={`http://localhost:1337${technology.attributes.icon.data?.attributes.url}`}
							alt={
								technology.attributes.icon.data?.attributes.alternativeText
									? technology.attributes.icon.data?.attributes.alternativeText
									: `Ikona ${technology.attributes.name}`
							}
						/>
						<p className="mt-2 text-xs font-bold text-slate-200">
							{technology.attributes.name}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default TechnologyCategory;
