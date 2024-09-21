import type { INews } from "entities/news";
import type { IFilters } from "shared/interfaces";

export interface NewsListWithPaginationProps {
	filters: IFilters;
	news: INews[];
	isLoading: boolean;
}
