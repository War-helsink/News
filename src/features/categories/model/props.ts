import type { CategoriesType } from "entities/category";

export interface CategoriesProps {
	currentCategory: CategoriesType;
	categories: CategoriesType[];
	isLoading: boolean;
	setCategory: (category: CategoriesType) => void;
}
