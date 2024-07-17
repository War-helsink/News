import type { INews } from "entities/news";
import type { IFilters } from "shared/interfaces";
import type { CategoriesType } from "entities/category";

export interface NewsFiltersCategoryProps {
	categories: CategoriesType[];
	filters: IFilters;

	isLoading: boolean;

	changeFilter: (key: string, value: string | number | null) => void;
}

export interface NewsByFiltersProps {
	filters: IFilters;
	isLoading: boolean;
	news: INews[];

	setFilters: (payload: { key: string; value: string | number | null }) => void;
}
