import axios from "axios";

import type {
	CategoriesApiResponse,
	NewsApiResponse,
	ParamsType,
} from "core/interface";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export async function getNews(params?: ParamsType): Promise<NewsApiResponse> {
	try {
		const { pageNumber = 1, pageSize = 10, category, keywords } = params || {};
		const response = await axios.get(`${BASE_URL}search`, {
			params: {
				apiKey: API_KEY,
				page_number: pageNumber,
				page_size: pageSize,
				category: category !== "all" ? category : null,
				keywords: keywords,
				language: "en",
			},
		});

		return response.data;
	} catch (error) {
		console.log(error);
		return { news: [], page: 1, status: "error" };
	}
}

export async function getLatestNews(): Promise<NewsApiResponse> {
	try {
		const response = await axios.get(`${BASE_URL}latest-news`, {
			params: {
				apiKey: API_KEY,
			},
		});
		return response.data;
	} catch (error) {
		console.log(error);
		return { news: [], page: 1, status: "error" };
	}
}

export async function getCategory(): Promise<CategoriesApiResponse> {
	try {
		const response = await axios.get(`${BASE_URL}available/categories`, {
			params: {
				apiKey: API_KEY,
			},
		});

		return response.data;
	} catch (error) {
		console.log(error);
		return { categories: [], description: "", status: "error" };
	}
}
