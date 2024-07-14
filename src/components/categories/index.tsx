import React from "react";
import { IonChip } from "@ionic/react";
import type { CategoriesType } from "core/interface";

import styles from "./styles.module.scss";

interface CategoriesProps {
	currentCategory: CategoriesType;
	categories: CategoriesType[];
	setCategory: (category: CategoriesType) => void;
}

class Categories extends React.Component<
	CategoriesProps & { forwardedRef: React.RefObject<HTMLDivElement> }
> {
	render() {
		return (
			<div ref={this.props.forwardedRef} className={styles.categories}>
				<IonChip
					className={`${styles.item} ${
						this.props.currentCategory === "all" ? styles.active : ""
					}`}
					onClick={() => this.props.setCategory("all")}
				>
					All
				</IonChip>
				{this.props.categories.map((category) => (
					<IonChip
						key={category}
						className={`${styles.item} ${
							this.props.currentCategory === category ? styles.active : ""
						}`}
						onClick={() => this.props.setCategory(category)}
					>
						{category}
					</IonChip>
				))}
			</div>
		);
	}
}

const ForwardedCategories = React.forwardRef<HTMLDivElement, CategoriesProps>(
	(props, ref) => (
		<Categories
			{...props}
			forwardedRef={ref as React.RefObject<HTMLDivElement>}
		/>
	),
);

export default ForwardedCategories;
