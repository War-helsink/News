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
		return (
			<div className={styles[this.props.type]}>
				{this.props.type === "banner" ? (
					<Image image={this.props.item?.image} />
				) : (
					<IonImg
						className={styles.img}
						alt="news"
						src={this.props.item.image}
					/>
				)}

				<div className="flex flex-col gap-2">
					<h3
						className={`${
							this.props.type === "banner" ? "text-base" : "text-sm"
						}`}
					>
						{this.props.item.title}
					</h3>
					<p className={styles.extra}>
						{formatTimeAgo(this.props.item.published)} by{" "}
						{this.props.item.author}
					</p>
				</div>
			</div>
		);
	}
}

export default NewsCard;
