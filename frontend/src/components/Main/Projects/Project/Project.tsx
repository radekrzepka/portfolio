import React from "react";

interface Props {
	data: {
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

const Project: React.FC<Props> = props => {
	return <div>{props.data.name}</div>;
};

export default Project;
