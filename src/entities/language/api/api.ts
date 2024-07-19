import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { LanguageApiResponse } from "../model/types";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const languagesApi = createApi({
	reducerPath: "languagesApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getLanguage: builder.query<LanguageApiResponse, null>({
			query: () => {
				return {
					url: "available/languages",
					params: {
						apiKey: API_KEY,
					},
				};
			},
		}),
	}),
});

export const { useGetLanguageQuery } = languagesApi;
