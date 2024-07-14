import React from "react";
import { IonChip } from "@ionic/react";
import styles from "./styles.module.scss";

interface CategoriesProps {
	currentCategory: string;
	categories: string[];
	setCategory: (category: string) => void;
}

class Categories extends React.Component<CategoriesProps> {
	render() {
		return (
			<div className={styles.categories}>
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

export default Categories;
