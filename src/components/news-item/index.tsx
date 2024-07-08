import React from "react";
import styles from "./styles.module.scss";
import type { NewItem } from "../../core/interface";
import { formatTimeAgo } from "../../helpers";

interface NewsItemProps {
	item: NewItem;
}

class NewsItem extends React.Component<NewsItemProps> {
	render() {
		return (
			<li className={styles.item}>
				<div
					className={styles.wrapper}
					style={{ backgroundImage: `url(${this.props.item.image})` }}
				/>
				<div className={styles.info}>
					<h3 className={styles.title}>{this.props.item.title}</h3>
					<p className={styles.extra}>
						{formatTimeAgo(this.props.item.published)} by {this.props.item.author}
					</p>
				</div>
			</li>
		);
	}
}

export default NewsItem;
