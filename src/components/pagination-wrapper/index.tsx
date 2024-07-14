import type { FC } from "react";
import Pagination, { type PaginationProps } from "components/pagination";

interface PaginationWrapperProps extends PaginationProps {
	top: boolean;
	bottom: boolean;
	children: React.ReactElement;
}

const PaginationWrapper: FC<PaginationWrapperProps> = ({
	top,
	bottom,
	children,
	...paginationProps
}) => {
	return (
		<>
			{top && <Pagination {...paginationProps} />}
			{children}
			{bottom && <Pagination {...paginationProps} />}
		</>
	);
};

export default PaginationWrapper;
