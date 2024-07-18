import type { FC } from "react";
import { NewsList } from "widgets/news";
import { useGetLatestNewsQuery } from "entities/news";
import styles from "./styles.module.scss";

const LatestNews: FC = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null);

	return (
		<section className={styles.section}>
			<NewsList type="banner" direction="row" news={data ? data.news : undefined} isLoading={isLoading} />
		</section>
	);
};

export default LatestNews;
