import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export async function getNews({
	pageNumber = 1,
	pageSize = 10,
	category = null,
	keywords = "",
}) {
	try {
		const response = await axios.get(`${BASE_URL}search`, {
			params: {
				apiKey: API_KEY,
				page_number: pageNumber,
				page_size: pageSize,
				category: category,
				keywords: keywords,
				language: "en",
			},
		});

		return response.data;
	} catch (error) {
		console.log(error);
	}
}

export async function getCategory() {
	try {
		const response = await axios.get(`${BASE_URL}available/categories`, {
			params: {
				apiKey: API_KEY,
			},
		});

		return response.data;
	} catch (error) {
		console.log(error);
	}
}
