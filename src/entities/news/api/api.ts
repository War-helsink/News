import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ParamsType } from "shared/interfaces";
import type { NewsApiResponse } from "../model/types";
import { setNews } from "../model/slice";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
	reducerPath: "newsApi",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getNews: builder.query<NewsApiResponse, ParamsType>({
			keepUnusedDataFor: 0,
			query: (params) => {
				const {
					pageNumber = 1,
					pageSize = 10,
					category,
					keywords,
				} = params || {};
				return {
					url: "search",
					params: {
						apiKey: API_KEY,
						page_number: pageNumber,
						page_size: pageSize,
						category,
						keywords,
					},
				};
			},
			async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
				const result = await queryFulfilled;
				const data = result.data;

				dispatch(setNews(data.news));
			},
		}),
		getLatestNews: builder.query<NewsApiResponse, null>({
			query: () => {
				return {
					url: "latest-news",
					params: {
						apiKey: API_KEY,
					},
				};
			},
		}),
	}),
});

export const { useGetNewsQuery, useGetLatestNewsQuery } = newsApi;
