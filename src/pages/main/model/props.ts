import type { INews } from "entities/news";
import type { IFilters } from "shared/interfaces";
import type { CategoriesType } from "entities/category";
import type { AppDispatch } from "app/appStore";

export interface NewsByFiltersProps {
	filters: IFilters;
	news: INews[];

	dispatch: AppDispatch;
}

export interface NewsByFiltersState {
	isLoading: boolean;

	categories: CategoriesType[];
	isLoadingCategories: boolean;
}

export interface NewsListWithPaginationProps {
	filters: IFilters;
	news: INews[];
	isLoading: boolean;
}
