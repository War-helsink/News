import type { FC } from "react";
import PaginationButtons, { type PaginationButtonsProps } from "../PaginationButtons";

interface PaginationProps extends PaginationButtonsProps {
	top: boolean;
	bottom: boolean;
	children: React.ReactElement;
}

const Pagination: FC<PaginationProps> = ({
	top,
	bottom,
	children,
	...paginationProps
}) => {
	return (
		<>
			{top && <PaginationButtons {...paginationProps} />}
			{children}
			{bottom && <PaginationButtons {...paginationProps} />}
		</>
	);
};

export default Pagination;
