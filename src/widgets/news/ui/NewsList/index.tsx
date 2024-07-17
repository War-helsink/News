import React from "react";
import { NewsItem } from "entities/news";

import withSkeleton from "shared/hocs/withSkeleton";

import type { NewsListProps } from "../../model/props";
import styles from "./styles.module.scss";

class NewsList extends React.Component<NewsListProps> {
	render() {
		return (
			<ul className={styles.list}>
				{this.props.news.map((item) => (
					<NewsItem key={item.id} item={item} />
				))}
			</ul>
		);
	}
}

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsListWithSkeleton;
