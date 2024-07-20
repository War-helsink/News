import type { LanguageType } from "entities/language";
import type { AppDispatch } from "app/appStore";

export interface LanguageButtonProps {
	slot?: string;

	language: LanguageType;

	dispatch: AppDispatch;
	changeLanguage: (language: LanguageType) => void;
}
