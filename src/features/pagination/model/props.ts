export interface PaginationProps extends PaginationButtonsProps {
	top: boolean;
	bottom: boolean;
	children: React.ReactElement;
}

export interface PaginationButtonsProps {
	changePageNumber: (value: string | number | null) => void;
	totalPages: number;
	currentPage: number;
}
