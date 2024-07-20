import type { INews } from "entities/news";
import type { IFilters } from "shared/interfaces";
import type { AppDispatch } from "app/appStore";

export interface NewsByFiltersProps {
	filters: IFilters;
	news: INews[];

	dispatch: AppDispatch;
}

export interface NewsListWithPaginationProps {
	filters: IFilters;
	news: INews[];
	isLoading: boolean;
}
