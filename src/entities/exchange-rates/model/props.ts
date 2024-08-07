import type { ExchangeRatesSimplified } from "entities/exchange-rates";

export interface ExchangeRatesBlockProps {
	disabled?: boolean;

	value?: number;
	exchangeRate?: number;

	onChangeValue?: (value: number) => void;
	onChangeExchangeRate?: (exchangeRate: number) => void;

	exchangeRates?: ExchangeRatesSimplified[];
}
