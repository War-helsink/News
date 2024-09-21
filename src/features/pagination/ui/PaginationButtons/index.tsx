import { IonButton, IonIcon } from "@ionic/react";
import { arrowBack, arrowForward } from "ionicons/icons";

import type { PaginationButtonsProps } from "../../model/props";
import styles from "./styles.module.scss";

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
	currentPage,
	minPages = 1,
	maxPages = 5,
	changePageNumber,
}) => {
	const nextPage = () => {
		if (currentPage < maxPages) {
			changePageNumber(currentPage + 1);
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			changePageNumber(currentPage - 1);
		}
	};

	const selectPage = (currentPage: number) => {
		changePageNumber(currentPage);
	};

	const pages = [];
	for (let i = -2; i <= 2; i++) {
		const page = currentPage + i;
		if (page >= minPages && page <= maxPages) {
			pages.push(page);
		}
	}

	return (
		<div className="w-full flex justify-center items-center gap-1.5">
			<IonButton
				shape="round"
				fill="clear"
				type="button"
				size="small"
				onClick={prevPage}
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
						selectPage(minPages);
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

			{pages.map((pageNumber) => (
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
						selectPage(pageNumber);
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
						selectPage(maxPages);
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
				onClick={nextPage}
				disabled={currentPage === maxPages}
				className={`hidden lg:block ${styles.button} ${currentPage === maxPages ? styles.active : ""}`}
			>
				<IonIcon slot="icon-only" icon={arrowForward} />
			</IonButton>
		</div>
	);
};

export default PaginationButtons;
