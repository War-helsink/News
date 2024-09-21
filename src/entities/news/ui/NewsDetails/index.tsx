import { IonButton } from "@ionic/react";

import Chip from "shared/ui/Chip";
import SmartImage from "shared/ui/Image";
import { formatTimeAgo } from "shared/helpers";

import type { NewsDetailsProps } from "../../model/props";

const NewsDetails: React.FC<NewsDetailsProps> = ({ item }) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2">
			<SmartImage className="pt-[100%]" src={item.image} />

			<div className="p-5 md:px-5 md:py-0">
				<p>
					{item.description} ({item.language})
					<IonButton
						className="block w-fit"
						target="_blank"
						rel="noreferrer"
						shape="round"
						href={item.url}
					>
						Read more...
					</IonButton>
				</p>
				<p className="text-xs text-medium-default mb-2">
					{formatTimeAgo(item.published)} by {item.author}
				</p>

				<div className="flex flex-wrap">
					{item.category.map((category) => {
						return <Chip key={category} text={category} active />;
					})}
				</div>
			</div>
		</div>
	);
};

export default NewsDetails;
