import TechnologyCategory from "./TechnologyCategory/TechnologyCategory";

const Technologies = () => {
	const technologiesCategories = [
		{
			name: "Front-end",
			displayName: "Front-end",
		},
		{
			name: "Back-end",
			displayName: "Back-end",
		},
		{
			name: "Other",
			displayName: "Pozostałe",
		},
	];

	return (
		<div>
			{technologiesCategories.map(category => (
				<TechnologyCategory
					key={category.name}
					name={category.name}
					displayName={category.displayName}
				></TechnologyCategory>
			))}
		</div>
	);
};

export default Technologies;
