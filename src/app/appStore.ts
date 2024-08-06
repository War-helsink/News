import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { newsApi } from "entities/news";
import { languagesApi } from "entities/language";
import { categoriesApi } from "entities/category";
import { exchangeRatesApi } from "entities/exchange-rates";

import { rootReducer } from "./appReducer";

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			newsApi.middleware,
			categoriesApi.middleware,
			languagesApi.middleware,
			exchangeRatesApi.middleware,
		),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
