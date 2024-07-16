import newsReducer, { setNews, setFilters } from "./model/slice";

export type { INews } from "./model/types";
export { newsReducer, setNews, setFilters };

export { newsApi, useGetNewsQuery, useGetLatestNewsQuery } from "./api/api";

import NewsItem from "./ui/NewsItem";
import NewsBanner from "./ui/NewsBanner";

export { NewsItem, NewsBanner };