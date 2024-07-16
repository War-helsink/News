import { combineReducers } from "@reduxjs/toolkit";
import { newsApi } from "entities/news";
import { newsReducer } from "entities/news";
import { categoriesApi } from "entities/category";

export const rootReducer = combineReducers({
	news: newsReducer,
	[newsApi.reducerPath]: newsApi.reducer,
	[categoriesApi.reducerPath]: categoriesApi.reducer,
});
