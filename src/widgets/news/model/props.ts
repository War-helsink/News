import type { INews } from "entities/news";

export interface NewsListProps {
	news: INews[];
}

export interface BannersListProps {
	banners: INews[] | null;
}
