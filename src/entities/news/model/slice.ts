import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IFilters } from "shared/interfaces";
import { PAGE_SIZE } from "shared/config";

import type { INews } from "./types";

export interface State {
	news: INews[];
	filters: IFilters;
	currentNews: INews | null;
}

const initialState: State = {
	news: [],
	currentNews: null,
	filters: {
		pageNumber: 1,
		pageSize: PAGE_SIZE,
		category: "regional",
		keywords: "",
		language: "en",
	},
};

export const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {
		setNews: (state, action: PayloadAction<INews[]>) => {
			state.news = action.payload;
		},
		setCurrentNews: (state, action: PayloadAction<INews>) => {
			state.currentNews = action.payload;
		},
		setFilters: (
			state,
			action: PayloadAction<{ key: string; value: string | null | number }>,
		) => {
			const { key, value } = action.payload;
			state.filters = { ...state.filters, [key]: value };
		},
	},
});

export const { setNews, setFilters, setCurrentNews } = newsSlice.actions;

export default newsSlice.reducer;
