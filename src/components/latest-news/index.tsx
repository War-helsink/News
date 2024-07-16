import type { FC } from "react";
import BannersList from "components/banners-list";
import styles from "./styles.module.scss";
import { useGetLatestNewsQuery } from "store/services/newsApi";

const LatestNews: FC = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null);

	return (
		<section className={styles.section}>
			<BannersList banners={data ? data.news : null} isLoading={isLoading} />
		</section>
	);
};

export default LatestNews;
