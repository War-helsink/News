import { IonChip } from "@ionic/react";

import type { ChipProps } from "../../model/props";
import styles from "./styles.module.scss";

const Chip = ({ text = "", active = false, onClick }: ChipProps) => {
	return (
		<IonChip
			onClick={onClick}
			className={`flex justify-center min-w-fit p-2 m-1 ${active ? styles.active : ""}`}
		>
			{text}
		</IonChip>
	);
};

export default Chip;
