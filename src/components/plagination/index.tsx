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
					onClick={this.prevPage}
					disabled={this.props.currentPage === 1}
				>
					<IonIcon slot="icon-only" icon={arrowBack} />
				</IonButton>
				<div className={styles.list}>
					{[...Array(this.props.totalPages)].map((_, index) => (
						<IonButton
							shape="round"
							fill="clear"
							className={`${
								index + 1 === this.props.currentPage ? "active" : ""
							}`}
							color={
								index + 1 === this.props.currentPage ? "danger" : undefined
							}
							disabled={index + 1 === this.props.currentPage}
							key={index + 1}
							type="button"
							onClick={() => {
								this.selectPage(index + 1);
							}}
						>
							<span slot="icon-only">{index + 1}</span>
						</IonButton>
					))}
				</div>
				<IonButton
					shape="round"
					fill="clear"
					type="button"
					onClick={this.nextPage}
					disabled={this.props.currentPage === this.props.totalPages}
				>
					<IonIcon slot="icon-only" icon={arrowForward} />
				</IonButton>
			</div>
		);
	}
}

export default Pagination;
