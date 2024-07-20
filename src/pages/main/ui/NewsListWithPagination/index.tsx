import { IonButtons, IonButton } from "@ionic/react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "app/appStore";
import { NewsList } from "widgets/news";
import { Pagination } from "features/pagination";

import type { INews } from "entities/news";
import { setCurrentNews } from "entities/news";

import type { NewsType, DirectionType } from "shared/interfaces";
import { MAX_PAGES, MIN_PAGES } from "shared/config";

import { usePaginationNews } from "../../utils/hooks/usePaginationNews";
import type { NewsListWithPaginationProps } from "../../model/props";

const NewsListWithPagination = ({
	filters,
	news,
	isLoading,
}: NewsListWithPaginationProps) => {
	const { changePageNumber } = usePaginationNews();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const navigateTo = (news: INews) => {
		dispatch(setCurrentNews(news));
		navigate(`/news/${news.id}`);
	};

	return (
		<Pagination
			top
			bottom
			changePageNumber={changePageNumber}
			maxPages={MAX_PAGES}
			minPages={MIN_PAGES}
			currentPage={filters.pageNumber}
		>
			<NewsList
				type={"item" as NewsType}
				direction={"column" as DirectionType}
				isLoading={isLoading}
				news={news}
				viewNewsSlot={(news) => (
					<IonButtons>
						<IonButton className="normal-case" onClick={() => navigateTo(news)}>
							view more...
						</IonButton>
					</IonButtons>
				)}
			/>
		</Pagination>
	);
};

export default NewsListWithPagination;
