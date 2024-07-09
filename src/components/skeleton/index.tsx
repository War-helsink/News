import React from "react";
import styles from "./styles.module.scss";

interface SkeletonProps {
	count?: number;
	type?: "item" | "banner";
}

class Skeleton extends React.Component<SkeletonProps> {
	static defaultProps = {
		count: 1,
		type: "banner",
	};

	render() {
		return (
			<>
				{this.props.count > 1 ? (
					<ul className={styles.list}>
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
