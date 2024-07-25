import type { FC } from "react";

import { motion } from "framer-motion";

import { useSymbolsReel } from "../../utils/hooks";
import type { SlotReelProps } from "../../model/props";

import SlotSymbol from "../SlotSymbol";
import styles from "./styles.module.scss";

const SlotReel: FC<SlotReelProps> = ({
	positionIndex,
	symbolColumn,
	slotColumn,
	sizeSlot,
	symbols,
	spinning,
}) => {
	const symbolsReel = useSymbolsReel({
		symbolColumn,
		symbols,
		spinning,
	});

	const heightLastElement =
		symbolColumn.length * (symbolsReel.length / slotColumn - 1) * sizeSlot;

	return (
		<>
			<motion.div
				className={styles["reel-inner"]}
				style={{
					width: sizeSlot,
					left: positionIndex * sizeSlot,
				}}
				animate={{
					y: spinning ? -heightLastElement : 0,
				}}
				transition={{ duration: 2, ease: "easeInOut" }}
			>
				{symbolsReel.map((symbolVal, i) => (
					<SlotSymbol key={i} symbol={symbols[symbolVal]} />
				))}
			</motion.div>
		</>
	);
};

export default SlotReel;
