import { useAppDispatch } from "app/appStore";
import { setFilters } from "entities/news";

export const usePaginationNews = () => {
	const dispatch = useAppDispatch();

	const changePageNumber = (value: number) => {
		dispatch(setFilters({ key: "pageNumber", value }));
	};

	return { changePageNumber };
};
