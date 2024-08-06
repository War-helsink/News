import type {
	CurrencyType,
	ExchangeRatesSimplified,
} from "entities/exchange-rates";

export const defaultCurrencies: CurrencyType[] = ["USD", "EUR", "GBP"];

export const baseValue: ExchangeRatesSimplified = {
	code: "UAH",
	rate: 1,
};
