import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
	ExchangeRatesApiResponse,
	ExchangeRatesSimplified,
} from "../model/types";

export const exchangeRatesApi = createApi({
	reducerPath: "exchangeRatesApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://bank.gov.ua/NBUStatService/v1/",
	}),
	endpoints: (builder) => ({
		getExchangeRates: builder.query<ExchangeRatesSimplified[], null>({
			query: () => "statdirectory/exchange?json",
			transformResponse: (exchangeRates: ExchangeRatesApiResponse) => {
				const newExchangeRates: ExchangeRatesSimplified[] = exchangeRates.map(
					(exchangeRate) => ({
						code: exchangeRate.cc,
						rate: exchangeRate.rate,
					}),
				);

				return newExchangeRates;
			},
		}),
	}),
});

export const { useGetExchangeRatesQuery } = exchangeRatesApi;
