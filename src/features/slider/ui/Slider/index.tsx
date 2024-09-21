import { useRef } from "react";
import styles from "./styles.module.scss";

import { IonButton, IonIcon } from "@ionic/react";
import { arrowBack, arrowForward } from "ionicons/icons";

import type { SliderProps } from "../../model/props";

const Slider: React.FC<SliderProps> = ({ step = 150, children }) => {
	const sliderRef = useRef<HTMLDivElement>(null);

	const scrollLeft = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollLeft -= step;
		}
	};

	const scrollRight = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollLeft += step;
		}
	};

	return (
		<div className="w-full flex items-center gap-2">
			<IonButton
				shape="round"
				fill="clear"
				type="button"
				size="small"
				onClick={scrollLeft}
				className={styles.arrow}
			>
				<IonIcon slot="icon-only" icon={arrowBack} />
			</IonButton>

			<div
				ref={sliderRef}
				className={`flex w-full gap-2 items-start box-border overflow-x-auto whitespace-nowrap ${styles["scrollbar-hidden"]}`}
			>
				{children}
			</div>

			<IonButton
				shape="round"
				fill="clear"
				type="button"
				size="small"
				onClick={scrollRight}
				className={styles.arrow}
			>
				<IonIcon slot="icon-only" icon={arrowForward} />
			</IonButton>
		</div>
	);
};

export default Slider;
