import type { FC } from "react";
import { NewsBanner } from "entities/news";

import withSkeleton from "shared/hocs/withSkeleton";

import type { BannersListProps } from "../../model/BannersListProps";
import styles from "./styles.module.scss";

const BannersList: FC<BannersListProps> = ({ banners }) => {
	return (
		<ul className={styles.banners}>
			{banners?.map((banner) => {
				return <NewsBanner key={banner.id} item={banner} />;
			})}
		</ul>
	);
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 10, "row");

export default BannersListWithSkeleton;
