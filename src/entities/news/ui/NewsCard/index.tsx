import React from "react";
import { formatTimeAgo } from "shared/helpers";
import SmartImage from "shared/ui/Image";

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
					<SmartImage src={item?.image} className={styles[`img-${type}`]} />

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
