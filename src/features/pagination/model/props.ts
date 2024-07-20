export interface PaginationProps extends PaginationButtonsProps {
	top: boolean;
	bottom: boolean;
	children: React.ReactElement;
}

export interface PaginationButtonsProps {
	changePageNumber: (value: number) => void;
	maxPages: number;
	minPages: number;
	currentPage: number;
}
