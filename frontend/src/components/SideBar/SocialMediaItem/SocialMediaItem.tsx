type Props = {
	href: string;
	imgSrc: string;
	imgAlt: string;
};

const SocialMediaItem = (props: Props) => {
	return (
		<li className="">
			<a href={props.href} target="_blank" rel="noopener noreferrer">
				<img
					src={props.imgSrc}
					alt={`Ikonka ${props.imgAlt}`}
					className="h-10 w-10 brightness-[92%] contrast-[92%] hue-rotate-[175deg] invert-[67%] saturate-[374%] sepia-[16%] hover:brightness-[99%] hover:contrast-[97%] hover:hue-rotate-[181deg] hover:invert-[98%] hover:sepia-[3%]"
				/>
			</a>
		</li>
	);
};

export default SocialMediaItem;
