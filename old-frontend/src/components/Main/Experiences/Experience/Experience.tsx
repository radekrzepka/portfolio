import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type Props = {
	data: {
		jobTitle: string;
		companyName: string;
		description: string;
		startDate: string;
		endDate: string | null;
	};
};

const Experience = (props: Props) => {
	const [startDateYear, startDateMonth] = props.data.startDate.split("-");
	const [endDateYear, endDateMonth] = props.data.endDate
		? props.data.endDate.split("-")
		: ["", ""];

	return (
		<div className="mb-8 xl:flex">
			<div className="mt-2 text-xs font-bold uppercase lg:flex-grow-[2] lg:pr-20">
				<p className="inline">
					{startDateMonth}.{startDateYear}
				</p>
				<p className="inline"> - </p>
				<p className="inline">
					{props.data.endDate ? `${endDateMonth}.${endDateYear}` : " nadal"}
				</p>
			</div>
			<div className="">
				<p className="mb-2 text-xl text-whiteHeadersColor">
					{props.data.jobTitle}
				</p>
				<p className="mb-4">{props.data.companyName}</p>
				<ReactMarkdown>{props.data.description}</ReactMarkdown>
			</div>
		</div>
	);
};

export default Experience;
