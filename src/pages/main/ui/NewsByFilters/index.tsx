import { useAppSelector } from "app/appStore";

import { NewsFilters } from "widgets/news";
import { useGetNewsQuery } from "entities/news";
import { useGetCategoriesQuery } from "entities/category";
import { useDebounce } from "shared/hooks/useDebounce";
import NewsListWithPagination from "../NewsListWithPagination";

const NewsByFilters: React.FC = () => {
	const filters = useAppSelector((state) => state.news.filters);
	const news = useAppSelector((state) => state.news.news);

	const debouncedKeywords = useDebounce(filters.keywords, 1500);

	const { isLoading, isFetching } = useGetNewsQuery({
		...filters,
		keywords: debouncedKeywords,
	});

	const { data, isLoading: isLoadingCategories } = useGetCategoriesQuery(null);

	return (
		<section className="w-full flex flex-col gap-8 truncate">
			<NewsFilters
				filters={filters}
				categories={data?.categories || []}
				isLoadingCategories={isLoadingCategories}
			/>

			<NewsListWithPagination
				isLoading={isLoading || isFetching}
				news={news}
				filters={filters}
			/>
		</section>
	);
};

export default NewsByFilters;
