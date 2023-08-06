import { useQuery, gql } from "@apollo/client";
import Experience from "./Experience/Experience";

type QueryData = {
	experiences: {
		data: [
			{
				attributes: {
					jobTitle: string;
					companyName: string;
					description: string;
					startDate: string;
					endDate: string | null;
				};
			}
		];
	};
};

const EXPERIENCES = gql`
	query GetExperience {
		experiences {
			data {
				attributes {
					jobTitle
					companyName
					description
					startDate
					endDate
				}
			}
		}
	}
`;

const compareDates = (date1: string, date2: string): number => {
	const [year1, month1, day1] = date1.split("-").map(Number);
	const [year2, month2, day2] = date2.split("-").map(Number);

	if (year1 !== year2) {
		return year2 - year1;
	} else if (month1 !== month2) {
		return month2 - month1;
	} else {
		return day2 - day1;
	}
};

const Experiences = () => {
	const { loading, error, data } = useQuery<QueryData>(EXPERIENCES);

	if (loading || error) return;

	const sortedExperiences = [...(data?.experiences.data ?? [])];

	sortedExperiences.sort((a, b) =>
		compareDates(a.attributes.startDate, b.attributes.startDate)
	);

	return (
		<div>
			<p
				className="mb-6 mt-4 text-3xl font-bold text-whiteHeadersColor lg:text-5xl"
				id="experience"
			>
				Doświadczenie
			</p>
			{sortedExperiences.map(experience => (
				<Experience
					key={experience.attributes.startDate}
					data={experience.attributes}
				/>
			))}
		</div>
	);
};

export default Experiences;
