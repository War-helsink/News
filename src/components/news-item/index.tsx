import React from "react";
import styles from "./styles.module.scss";
import type { INews } from "core/interface";
import { formatTimeAgo } from "helpers";
import { IonImg } from "@ionic/react";


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
