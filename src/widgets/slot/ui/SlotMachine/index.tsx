import { useState, type FC } from "react";
import { IonToolbar, IonButton } from "@ionic/react";

import { SlotReel } from "features/slot";

import { SLOT_COLUMN, SLOT_ROW, BASE_SIZE_SLOT } from "../../config";

const SlotMachine: FC = () => {
	const symbols = ["🍒", "🍋", "🍊", "🍉", "🍇"];
	const [result, setResult] = useState<number[][]>(
		new Array(SLOT_COLUMN).fill(new Array(SLOT_ROW).fill(0)),
	);
	const [spinning, setSpinning] = useState(false);
	const [completionAnimation, setCompletionAnimation] = useState(true);

	const spin = () => {
		setSpinning(true);
		setCompletionAnimation(false);

		const newResult = Array.from({ length: SLOT_COLUMN }, (_) =>
			Array.from({ length: SLOT_ROW }, () =>
				Math.floor(Math.random() * symbols.length),
			),
		);

		setResult(newResult);

		setTimeout(() => {
			setSpinning(false);

			setTimeout(() => {
				setCompletionAnimation(true);
			}, 2000);
		}, 2000);
	};

	return (
		<>
			<IonToolbar className="mt-8 w-fit">
				<div
					style={{
						width: BASE_SIZE_SLOT * SLOT_ROW,
						height: BASE_SIZE_SLOT * SLOT_COLUMN,
					}}
				>
					{new Array(SLOT_ROW).fill(null).map((_, index) => (
						<SlotReel
							key={`key_slot_drum_${index}`}
							positionIndex={index}
							symbolColumn={result.map((symbolRow) => symbolRow[index])}
							symbols={symbols}
							spinning={spinning}
							slotColumn={SLOT_COLUMN}
							sizeSlot={BASE_SIZE_SLOT}
						/>
					))}
				</div>
			</IonToolbar>

			<div className="w-full flex justify-center mt-8">
				<IonButton onClick={spin} disabled={!completionAnimation}>
					Spin
				</IonButton>
			</div>
		</>
	);
};

export default SlotMachine;
