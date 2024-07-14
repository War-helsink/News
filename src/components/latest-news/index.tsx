import type { FC } from "react";
import BannersList from "components/banners-list";
import styles from "./styles.module.scss";
import type { NewItem } from "core/interface";

import { getLatestNews } from "api/apiNews";
import { useFetch } from "helpers/hooks";

interface Data {
	news: NewItem[];
}

const LatestNews: FC = () => {
	const { data, isLoading } = useFetch<Data, undefined>(getLatestNews);

	return (
		<section className={styles.section}>
			<BannersList banners={data ? data.news : null} isLoading={isLoading} />
		</section>
	);
};

export default LatestNews;
