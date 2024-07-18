import type { ReactNode } from "react";

import type { INews } from "entities/news";
import type { CategoriesType } from "entities/category";

import type { IFilters } from "shared/interfaces";
import type { NewsType, DirectionType } from "shared/interfaces";

export interface NewsFiltersProps {
	categories: CategoriesType[];
	filters: IFilters;

	isLoadingCategories: boolean;

	changeFilter: (key: string, value: string | number | null) => void;
}

export interface NewsListProps {
	news?: INews[];
	type?: NewsType;
	direction?: DirectionType;
	viewNewsSlot?: (news: INews) => ReactNode;
}
