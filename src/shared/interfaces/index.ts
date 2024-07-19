import type { CategoriesType } from "entities/category";
import type { LanguageType } from "entities/language";

export type NewsType = "banner" | "item";
export type SkeletonType = "banner" | "item" | "chip";
export type DirectionType = "fullRow" | "row" | "column";

export interface IFilters {
	pageNumber: number;
	pageSize: number;
	category: CategoriesType;
	keywords: string;
	language: LanguageType;
}

export type ParamsType = Partial<IFilters>;
