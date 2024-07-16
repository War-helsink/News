import type { FC } from "react";
import { BannersList } from "widgets/news";
import { useGetLatestNewsQuery } from "entities/news";
import styles from "./styles.module.scss";

const LatestNews: FC = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null);

	return (
		<section className={styles.section}>
			<BannersList banners={data ? data.news : null} isLoading={isLoading} />
		</section>
	);
};

export default LatestNews;
