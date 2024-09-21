import { NewsCard } from "entities/news";

import withSkeleton from "shared/hocs/withSkeleton";

import type { NewsListProps } from "../../model/props";
import styles from "./styles.module.scss";

const NewsList: React.FC<NewsListProps> = ({ type, news, viewNewsSlot }) => {
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
};

const NewsListWithSkeleton = withSkeleton(NewsList, 10);

export default NewsListWithSkeleton;
