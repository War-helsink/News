import type { LanguageType, LanguagesType } from "entities/language";
import type { AppDispatch } from "app/appStore";

export interface LanguageButtonProps {
	slot?: string;

	dispatch: AppDispatch;

	changeLanguage: (language: LanguageType) => void;
}

export interface LanguageButtonState {
	language: LanguageType;
	languages: LanguagesType;
}
