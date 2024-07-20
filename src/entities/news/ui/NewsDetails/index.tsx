import { IonButton, IonChip } from "@ionic/react";

import SmartImage from "shared/ui/Image";
import { formatTimeAgo } from "shared/helpers/formatTimeAgo";

import type { INews } from "../../model/types";
import styles from "./styles.module.scss";

interface Props {
	item: INews;
}

const NewsDetails = ({ item }: Props) => {
	return (
		<div className={styles.details}>
			<SmartImage className="pt-[100%]" src={item.image} />

			<div className={styles.description}>
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
				<p className={styles.extra}>
					{formatTimeAgo(item.published)} by {item.author}
				</p>

				<div className="flex flex-wrap">
					{item.category.map((category) => {
						return (
							<IonChip key={category} className={styles.category}>
								{category}
							</IonChip>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default NewsDetails;
