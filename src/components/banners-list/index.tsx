import type { FC } from "react";
import withSkeleton from "hocs/withSkeleton";
import NewsBanner from "components/news-banner";
import styles from "./styles.module.scss";
import type { INews } from "core/interfaces";

interface BannersListProps {
	banners: INews[] | null;
}

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
