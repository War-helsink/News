export interface LanguageApiResponse {
	languages: LanguagesResultType;
	description: string;
	status: string;
}

export type LanguageType = string;

export type LanguagesType = LanguageType[];

export type LanguagesResultType = {
	[key: string]: LanguageType;
};
