import React from "react";
import { formatTimeAgo } from "shared/helpers";
import { IonImg } from "@ionic/react";

import type { INews } from "../../";
import styles from "./styles.module.scss";

interface NewsItemProps {
	item: INews;
}

class NewsItem extends React.Component<NewsItemProps> {
	render() {
		return (
			<li className={styles.item}>
				<IonImg className={styles.img} alt="news" src={this.props.item.image} />
				<div className={styles.info}>
					<h3 className={styles.title}>{this.props.item.title}</h3>
					<p className={styles.extra}>
						{formatTimeAgo(this.props.item.published)} by{" "}
						{this.props.item.author}
					</p>
				</div>
			</li>
		);
	}
}

export default NewsItem;
