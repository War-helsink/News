import React from "react";
import styles from "./styles.module.scss";
import type { NewItem } from "core/interface";

import NewsItem from "components/news-item";

interface NewsListProps {
	news: NewItem[];
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

export default NewsList;
