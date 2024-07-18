import { IonChip } from "@ionic/react";

import Image from "shared/ui/Image";
import { formatTimeAgo } from "shared/helpers/formatTimeAgo";

import type { INews } from "../../model/types";
import styles from "./styles.module.scss";

interface Props {
	item: INews;
}

const NewsDetails = ({ item }: Props) => {
	return (
		<div className={styles.details}>
			<Image image={item.image} />

			<div className={styles.description}>
				<p>
					{item.description} ({item.language}){" "}
					<a target="_blank" rel="noreferrer" href={item.url}>
						Read more...
					</a>
				</p>
				<p className={styles.extra}>
					{formatTimeAgo(item.published)} by {item.author}
				</p>

				<div className="flex flex-wrap">
					{item.category.map((category) => {
						return (
							<IonChip
								key={category}
								className={styles.category}
							>
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
