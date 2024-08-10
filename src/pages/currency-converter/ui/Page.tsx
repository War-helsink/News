import { type FC, useEffect, useState, useCallback, useMemo } from "react";
import { Helmet } from "react-helmet-async";

import {
	ExchangeRatesBlock,
	useGetExchangeRatesQuery,
} from "entities/exchange-rates";

import { defaultCurrencies, baseValue } from "../config";

const CurrencyConverterPage: FC = () => {
	const data = useGetExchangeRatesQuery(null);

	const [value, setValue] = useState(0);
	const [exchangeRates, setExchangeRates] = useState([baseValue]);
	const [exchangeRate1, setExchangeRate1] = useState(baseValue.rate);
	const [exchangeRate2, setExchangeRate2] = useState(baseValue.rate);

	useEffect(() => {
		if (data.data && data.data.length > 0) {
			const newExchangeRates = [
				baseValue,
				...data.data.filter((exchangeRate) =>
					defaultCurrencies.includes(exchangeRate.code),
				),
			];
			setExchangeRates(newExchangeRates);
		}
	}, [data]);

	const changeValue = useCallback((value: number) => {
		setValue(value);
	}, []);

	const changeExchangeRate = useCallback(
		(field: "exchangeRate1" | "exchangeRate2", value: number) => {
			if (field === "exchangeRate1") {
				setExchangeRate1(value);
			} else if (field === "exchangeRate2") {
				setExchangeRate2(value);
			}
		},
		[],
	);

	const exchangeRateRatio = useMemo(
		() => exchangeRate1 / exchangeRate2,
		[exchangeRate1, exchangeRate2],
	);
	const convertedValue = useMemo(
		() => value * exchangeRateRatio,
		[value, exchangeRateRatio],
	);

	return (
		<>
			<Helmet>
				<title>Converter</title>
			</Helmet>
			<main className="grid grid-cols-1 sm:grid-cols-2 gap-7 w-full sm:w-[800px] mx-auto my-[100px]">
				<ExchangeRatesBlock
					exchangeRates={exchangeRates}
					value={value}
					exchangeRate={exchangeRate1}
					onChangeValue={changeValue}
					onChangeExchangeRate={(value) =>
						changeExchangeRate("exchangeRate1", value)
					}
				/>
				<ExchangeRatesBlock
					disabled
					exchangeRates={exchangeRates}
					value={convertedValue}
					exchangeRate={exchangeRate2}
					onChangeExchangeRate={(value) =>
						changeExchangeRate("exchangeRate2", value)
					}
				/>
			</main>
		</>
	);
};

export default CurrencyConverterPage;
