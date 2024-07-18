import React from "react";
import { NewsCard } from "entities/news";

import withSkeleton from "shared/hocs/withSkeleton";

import type { NewsListProps } from "../../model/props";
import styles from "./styles.module.scss";

class NewsList extends React.Component<NewsListProps> {
	render() {
		return (
			<ul className={styles[`${this.props.type}s`]}>
				{this.props.news?.map((item) => (
					<NewsCard key={item.id} type={this.props.type} item={item} />
				))}
			</ul>
		);
	}
}

const NewsListWithSkeleton = withSkeleton(NewsList, 10);

export default NewsListWithSkeleton;
