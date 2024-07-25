import type { FC } from "react";

import type { SlotSymbolProps } from "../../model/props";
import styles from "./styles.module.scss";

const SlotSymbol: FC<SlotSymbolProps> = ({ symbol }) => {
	return (
		<div className={styles.symbol}>
			{symbol}
		</div>
	);
};

export default SlotSymbol;
