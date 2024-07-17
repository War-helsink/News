import React from "react";
import styles from "./styles.module.scss";

import type { SkeletonType, DirectionType } from "shared/interfaces";

import { IonSkeletonText } from "@ionic/react";

export interface SkeletonProps {
	count: number;
	type: SkeletonType;
	direction: DirectionType;
}

class Skeleton extends React.Component<SkeletonProps> {
	static defaultProps = {
		count: 1,
		type: "banner",
		direction: "column",
	};

	render() {
		return (
			<>
				<div className={styles[`${this.props.direction}List`]}>
					{this.props.type === "banner" &&
						[...Array(this.props.count)].map((_, index) => (
							<IonSkeletonText
								animated
								key={`key-li-${index}`}
								className={styles.banner}
							/>
						))}

					{this.props.type === "item" &&
						[...Array(this.props.count)].map((_, index) => (
							<div key={`key-li-${index}`} className={styles.item}>
								<IonSkeletonText animated className="w-16 h-16" />
								<div className="flex flex-col gap-2 w-9/12">
									<IonSkeletonText animated className="h-6" />
									<IonSkeletonText animated className="h-5 w-9/12" />
								</div>
							</div>
						))}
					{this.props.type === "chip" &&
						[...Array(this.props.count)].map((_, index) => (
							<IonSkeletonText
								key={`key-li-${index}`}
								className="min-w-20 max-w-20 h-9 rounded-2xl"
								animated
							/>
						))}
				</div>
			</>
		);
	}
}

export default Skeleton;
