import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IFilters, INews } from "core/interfaces";
import { PAGE_SIZE } from "config";

export interface State {
	news: INews[];
	filters: IFilters;
}

const initialState: State = {
	news: [],
	filters: {
		pageNumber: 1,
		pageSize: PAGE_SIZE,
		category: "all",
		keywords: "",
	},
};

export const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {
		setNews: (state, action: PayloadAction<INews[]>) => {
			state.news = action.payload;
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

export const { setNews, setFilters } = newsSlice.actions;

export default newsSlice.reducer;
