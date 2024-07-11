import React from "react";
import styles from "./styles.module.scss";

import { IonButton, IonIcon } from "@ionic/react";
import { arrowBack, arrowForward } from "ionicons/icons";

interface PaginationProps {
	onChangePage: (currentPage: number) => void;
	totalPages: number;
	currentPage: number;
}

class Pagination extends React.Component<PaginationProps> {
	static defaultProps = {
		totalPages: 5,
	};

	nextPage = () => {
		if (this.props.currentPage < this.props.totalPages) {
			this.props.onChangePage(this.props.currentPage + 1);
		}
	};

	prevPage = () => {
		if (this.props.currentPage > 1) {
			this.props.onChangePage(this.props.currentPage - 1);
		}
	};

	selectPage(currentPage: number) {
		this.props.onChangePage(currentPage);
	}

	render() {
		return (
			<div className={styles.pagination}>
				<IonButton
					shape="round"
					fill="clear"
					type="button"
					size="small"
					onClick={this.prevPage}
					disabled={this.props.currentPage === 1}
					className={`${styles.button} ${
						this.props.currentPage === 1 ? styles.active : ""
					}`}
				>
					<IonIcon slot="icon-only" icon={arrowBack} />
				</IonButton>
				{[...Array(this.props.totalPages)].map((_, index) => (
					<IonButton
						shape="round"
						fill="clear"
						className={`${styles.button} ${
							index + 1 === this.props.currentPage ? styles.active : ""
						}`}
						disabled={index + 1 === this.props.currentPage}
						size="small"
						key={index + 1}
						type="button"
						onClick={() => {
							this.selectPage(index + 1);
						}}
					>
						<span slot="icon-only">{index + 1}</span>
					</IonButton>
				))}
				<IonButton
					shape="round"
					fill="clear"
					type="button"
					size="small"
					onClick={this.nextPage}
					disabled={this.props.currentPage === this.props.totalPages}
					className={`${styles.button} ${
						this.props.currentPage === this.props.totalPages
							? styles.active
							: ""
					}`}
				>
					<IonIcon slot="icon-only" icon={arrowForward} />
				</IonButton>
			</div>
		);
	}
}

export default Pagination;
