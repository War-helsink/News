import { combineReducers } from "@reduxjs/toolkit";
import { newsApi } from "entities/news";
import { newsReducer } from "entities/news";
import { categoriesApi } from "entities/category";
import { languagesApi } from "entities/language";

export const rootReducer = combineReducers({
	news: newsReducer,
	[languagesApi.reducerPath]: languagesApi.reducer,
	[newsApi.reducerPath]: newsApi.reducer,
	[categoriesApi.reducerPath]: categoriesApi.reducer,
});
