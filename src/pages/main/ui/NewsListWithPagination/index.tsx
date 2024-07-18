import { NewsList } from "widgets/news";
import { Pagination } from "features/pagination";
import { TOTAL_PAGES } from "shared/config";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";
import type { NewsListWithPaginationProps } from "../../model/props";

const NewsListWithPagination = ({
	filters,
	news,
	isLoading,
}: NewsListWithPaginationProps) => {
	const { changePageNumber } = usePaginationNews();

	return (
		<Pagination
			top
			bottom
			changePageNumber={changePageNumber}
			totalPages={TOTAL_PAGES}
			currentPage={filters.pageNumber}
		>
			<NewsList
				type="item"
				direction="column"
				isLoading={isLoading}
				news={news}
			/>
		</Pagination>
	);
};

export default NewsListWithPagination;
