import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export async function getNews(pageNumber = 1, pageSize = 10) {
	try {
		const response = await axios.get(`${BASE_URL}latest-news`, {
			params: {
				apiKey: API_KEY,
				page_number: pageNumber,
				page_size: pageSize,
				language: "en",
			},
		});

		return response.data;
	} catch (error) {
		console.log(error);
	}
}
