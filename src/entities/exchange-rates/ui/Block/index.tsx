import { Component } from "react";
import {
	IonInput,
	IonSegment,
	IonSegmentButton,
	IonToolbar,
} from "@ionic/react";

import type { BlockProps } from "../../model/props";

import styles from "./styles.module.scss";

class Block extends Component<BlockProps> {
	render() {
		const {
			disabled = false,
			value = 0,
			exchangeRate = 0,
			exchangeRates = [],
			onChangeValue,
			onChangeExchangeRate,
		} = this.props;

		return (
			<IonToolbar className={styles.block}>
				<div className="flex flex-col gap-4 w-full">
					<IonSegment
						className={styles.segment}
						value={exchangeRate}
						onIonChange={(ev) =>
							onChangeExchangeRate
								? onChangeExchangeRate(ev.detail.value as number)
								: null
						}
						scrollable
					>
						{exchangeRates.map((exchangeRate) => (
							<IonSegmentButton
								key={exchangeRate.code}
								value={exchangeRate.rate}
							>
								{exchangeRate.code}
							</IonSegmentButton>
						))}
					</IonSegment>
					<IonInput
						disabled={disabled}
						fill="outline"
						onIonChange={(e) =>
							onChangeValue ? onChangeValue(Number(e.detail.value)) : null
						}
						value={value}
						type="number"
					/>
				</div>
			</IonToolbar>
		);
	}
}

export default Block;
