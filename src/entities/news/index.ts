import newsReducer, {
	setNews,
	setFilters,
	setCurrentNews,
} from "./model/slice";

export type { INews } from "./model/types";
export { newsReducer, setNews, setFilters, setCurrentNews };

export { newsApi, useGetNewsQuery, useGetLatestNewsQuery } from "./api/api";

import NewsDetails from "./ui/NewsDetails";
import NewsCard from "./ui/NewsCard";

export { NewsCard, NewsDetails };
