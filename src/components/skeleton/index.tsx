import React from "react";
import styles from "./styles.module.scss";

export interface SkeletonProps {
	count: number;
	type: "item" | "banner";
	direction: "column" | "row";
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
					<ul
						className={
							this.props.direction === "column"
								? styles.columnList
								: styles.rowList
						}
					>
						{[...Array(this.props.count)].map((_, index) => (
							<li
								key={`key-li-${index}`}
								className={
									this.props.type === "banner" ? styles.banner : styles.item
								}
							/>
						))}
					</ul>
				) : (
					<li
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
