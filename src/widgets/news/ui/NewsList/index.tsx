import React from "react";
import { NewsCard } from "entities/news";

import withSkeleton from "shared/hocs/withSkeleton";

import type { NewsListProps } from "../../model/props";
import styles from "./styles.module.scss";

class NewsList extends React.Component<NewsListProps> {
	render() {
		const { type, news, viewNewsSlot } = this.props;

		return (
			<ul className={styles[`${type}s`]}>
				{news?.map((item) => (
					<NewsCard
						key={item.id}
						viewNewsSlot={viewNewsSlot}
						type={type}
						item={item}
					/>
				))}
			</ul>
		);
	}
}

const NewsListWithSkeleton = withSkeleton(NewsList, 12);

export default NewsListWithSkeleton;
