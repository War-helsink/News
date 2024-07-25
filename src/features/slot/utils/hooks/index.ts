import { useEffect, useState } from "react";
import type { UseSymbolsDrumProps } from "../../model/props";

export const useSymbolsReel = ({
	symbolColumn,
	symbols,
	spinning,
}: UseSymbolsDrumProps) => {
	const [symbolsReel, setSymbolsReel] = useState<number[]>([]);
	const [symbolColumnPrev, setSymbolColumnPrev] = useState<number[]>(symbolColumn);

	useEffect(() => {
		if (!spinning) {
			setSymbolColumnPrev(symbolColumn);
		}

		const randomVal = Array.from({ length: symbolColumn.length * 10 }, () =>
			Math.floor(Math.random() * symbols.length),
		);

		setSymbolsReel([...symbolColumnPrev, ...randomVal, ...symbolColumn]);
	}, [symbolColumn,  symbolColumnPrev, spinning]);

	return symbolsReel;
};
