import React from "react";
import { IonChip } from "@ionic/react";
import styles from "./styles.module.scss";

interface CategoriesProps {
	currentCategory: string | null;
	categories: string[];
	setCurrentCategory: (currentCategory: string) => void;
}

class Categories extends React.Component<CategoriesProps> {
	render() {
		return (
			<div className={styles.categories}>
				{this.props.categories.map((category) => (
					<IonChip
						key={category}
						className={`${styles.item} ${
							this.props.currentCategory === category ? styles.active : ""
						}`}
						onClick={() => this.props.setCurrentCategory(category)}
					>
						{category}
					</IonChip>
				))}
			</div>
		);
	}
}

export default Categories;
