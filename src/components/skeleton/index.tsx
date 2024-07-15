import React from "react";
import styles from "./styles.module.scss";

import type { SkeletonType, DirectionType } from "core/interface";

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
				{this.props.count > 1 ? (
					<div
						className={
							this.props.direction === "column"
								? styles.columnList
								: styles.rowList
						}
					>
						{[...Array(this.props.count)].map((_, index) => (
							<IonSkeletonText
								animated
								key={`key-li-${index}`}
								className={
									this.props.type === "banner" ? styles.banner : styles.item
								}
							/>
						))}
					</div>
				) : (
					<IonSkeletonText
						animated
						className={
							this.props.type === "banner" ? styles.banner : styles.item
						}
					/>
				)}
			</>
		);
	}
}

export default Skeleton;
