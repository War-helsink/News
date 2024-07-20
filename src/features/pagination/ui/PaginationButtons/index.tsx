import React from "react";

import { IonButton, IonIcon } from "@ionic/react";
import { arrowBack, arrowForward } from "ionicons/icons";

import type { PaginationButtonsProps } from "../../model/props";
import styles from "./styles.module.scss";

class PaginationButtons extends React.Component<PaginationButtonsProps> {
	static defaultProps = {
		maxPages: 5,
		minPages: 1,
	};

	nextPage = () => {
		if (this.props.currentPage < this.props.maxPages) {
			this.props.changePageNumber(this.props.currentPage + 1);
		}
	};

	prevPage = () => {
		if (this.props.currentPage > 1) {
			this.props.changePageNumber(this.props.currentPage - 1);
		}
	};

	selectPage(currentPage: number) {
		this.props.changePageNumber(currentPage);
	}

	get pageNumbers() {
		const { currentPage, minPages, maxPages } = this.props;
		const pages = [];
		for (let i = -2; i <= 2; i++) {
			const page = currentPage + i;
			if (page >= minPages && page <= maxPages) {
				pages.push(page);
			}
		}
		return pages;
	}

	render() {
		const { currentPage, minPages, maxPages } = this.props;
		const pageNumbers = this.pageNumbers;

		return (
			<div className={styles.pagination}>
				<IonButton
					shape="round"
					fill="clear"
					type="button"
					size="small"
					onClick={this.prevPage}
					disabled={currentPage === 1}
					className={`hidden lg:block ${styles.button} ${
						currentPage === 1 ? styles.active : ""
					}`}
				>
					<IonIcon slot="icon-only" icon={arrowBack} />
				</IonButton>

				{currentPage - 2 > minPages && (
					<IonButton
						shape="round"
						className={styles.button}
						fill="clear"
						size="small"
						type="button"
						onClick={() => {
							this.selectPage(minPages);
						}}
					>
						<span slot="icon-only">{minPages}</span>
					</IonButton>
				)}

				{currentPage - 2 > minPages + 1 && (
					<IonButton
						disabled
						shape="round"
						className={styles.button}
						fill="clear"
						size="small"
						type="button"
					>
						<span slot="icon-only">...</span>
					</IonButton>
				)}

				{pageNumbers.map((pageNumber) => (
					<IonButton
						shape="round"
						fill="clear"
						className={`${styles.button} ${
							pageNumber === currentPage ? styles.active : ""
						}`}
						disabled={pageNumber === currentPage}
						size="small"
						key={pageNumber}
						type="button"
						onClick={() => {
							this.selectPage(pageNumber);
						}}
					>
						<span slot="icon-only">{pageNumber}</span>
					</IonButton>
				))}

				{currentPage + 2 < maxPages - 1 && (
					<IonButton
						disabled
						shape="round"
						className={styles.button}
						fill="clear"
						size="small"
						type="button"
					>
						<span slot="icon-only">...</span>
					</IonButton>
				)}

				{currentPage + 2 < maxPages && (
					<IonButton
						shape="round"
						className={styles.button}
						fill="clear"
						size="small"
						type="button"
						onClick={() => {
							this.selectPage(maxPages);
						}}
					>
						<span slot="icon-only">{maxPages}</span>
					</IonButton>
				)}

				<IonButton
					shape="round"
					fill="clear"
					type="button"
					size="small"
					onClick={this.nextPage}
					disabled={currentPage === maxPages}
					className={`hidden lg:block ${styles.button} ${currentPage === maxPages ? styles.active : ""}`}
				>
					<IonIcon slot="icon-only" icon={arrowForward} />
				</IonButton>
			</div>
		);
	}
}

export default PaginationButtons;
