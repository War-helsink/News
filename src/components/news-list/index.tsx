import React from "react";
import styles from "./styles.module.scss";
import type { INews } from "core/interface";

import NewsItem from "components/news-item";

import withSkeleton from "hocs/withSkeleton";

interface NewsListProps {
	news: INews[];
}

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
