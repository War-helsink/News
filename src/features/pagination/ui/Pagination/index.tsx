import type { FC } from "react";
import PaginationButtons from "../PaginationButtons";

import type { PaginationProps } from "../../model/props";


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
