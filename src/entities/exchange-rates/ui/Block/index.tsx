import type { FC } from "react";
import {
	IonInput,
	IonSegment,
	IonSegmentButton,
	IonToolbar,
} from "@ionic/react";

import type { ExchangeRatesBlockProps } from "../../model/props";

import styles from "./styles.module.scss";

const ExchangeRatesBlock: FC<ExchangeRatesBlockProps> = ({
	disabled = false,
	value = 0,
	exchangeRate = 0,
	exchangeRates = [],
	onChangeValue,
	onChangeExchangeRate,
}) => {
	return (
		<IonToolbar className={styles.block}>
			<div className="flex flex-col gap-4 w-full">
				<div className={"w-full flex-grow flex items-center justify-center"}>
					<span className={`${styles.border} px-6 py-3 opacity-35`}>
						{exchangeRate}
					</span>
				</div>
				<IonSegment
					className={styles.border}
					value={exchangeRate}
					onIonChange={(ev) =>
						onChangeExchangeRate
							? onChangeExchangeRate(ev.detail.value as number)
							: null
					}
					scrollable
				>
					{exchangeRates.map((exchangeRate) => (
						<IonSegmentButton key={exchangeRate.code} value={exchangeRate.rate}>
							{exchangeRate.code}
						</IonSegmentButton>
					))}
				</IonSegment>
				<IonInput
					mode="md"
					type="number"
					fill="outline"
					value={value}
					disabled={disabled}
					onIonChange={(e) =>
						onChangeValue ? onChangeValue(Number(e.detail.value)) : null
					}
				/>
			</div>
		</IonToolbar>
	);
};

export default ExchangeRatesBlock;
