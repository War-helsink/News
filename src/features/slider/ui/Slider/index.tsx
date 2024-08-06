import React from "react";
import styles from "./styles.module.scss";

import { IonButton, IonIcon } from "@ionic/react";
import { arrowBack, arrowForward } from "ionicons/icons";

import type { SliderProps } from "../../model/props";

class Slider extends React.Component<SliderProps> {
	static defaultProps = {
		step: 150,
	};

	constructor(props: SliderProps) {
		super(props);
		this.sliderRef = React.createRef();
	}

	sliderRef: React.RefObject<HTMLDivElement>;

	scrollLeft = () => {
		if (this.sliderRef.current) {
			this.sliderRef.current.scrollLeft -= this.props.step;
		}
	};

	scrollRight = () => {
		if (this.sliderRef.current) {
			this.sliderRef.current.scrollLeft += this.props.step;
		}
	};

	render() {
		return (
			<div className="w-full flex items-center gap-2">
				<IonButton
					shape="round"
					fill="clear"
					type="button"
					size="small"
					onClick={this.scrollLeft}
					className={styles.arrow}
				>
					<IonIcon slot="icon-only" icon={arrowBack} />
				</IonButton>

				<div
					ref={this.sliderRef}
					className={`flex w-full gap-2 items-start box-border overflow-x-auto whitespace-nowrap ${styles["scrollbar-hidden"]}`}
				>
					{this.props.children}
				</div>

				<IonButton
					shape="round"
					fill="clear"
					type="button"
					size="small"
					onClick={this.scrollRight}
					className={styles.arrow}
				>
					<IonIcon slot="icon-only" icon={arrowForward} />
				</IonButton>
			</div>
		);
	}
}

export default Slider;
