import type { CategoriesType } from "entities/category";

export type NewsType = "banner" | "item";
export type SkeletonType = "banner" | "item" | "chip";
export type DirectionType = "fullRow" | "row" | "column";

export interface IFilters {
	pageNumber: number;
	pageSize: number;
	category: CategoriesType;
	keywords: string;
	language: string;
}

export type ParamsType = Partial<IFilters>;
