import React from "react";
import { formatTimeAgo } from "shared/helpers";
import { IonImg } from "@ionic/react";
import Image from "shared/ui/Image";

import styles from "./styles.module.scss";
import type { NewsCardProps } from "../../model/props";

class NewsCard extends React.Component<NewsCardProps> {
	static defaultProps = {
		type: "item",
	};

	render() {
		const { type, item, viewNewsSlot } = this.props;

		return (
			<div className={`${styles[type]} justify-between`}>
				<div className={styles[type]}>
					{type === "banner" ? (
						<Image image={item?.image} />
					) : (
						<IonImg className={styles.img} alt="news" src={item.image} />
					)}

					<div className="flex flex-col gap-2">
						<h3 className={`${type === "banner" ? "text-base" : "text-sm"}`}>
							{item.title}
						</h3>
						<p className={styles.extra}>
							{formatTimeAgo(item.published)} by {item.author}
						</p>
					</div>
				</div>
				{viewNewsSlot ? viewNewsSlot(item) : null}
			</div>
		);
	}
}

export default NewsCard;
