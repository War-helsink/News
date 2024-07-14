import React from "react";
import styles from "./styles.module.scss";

import type { INews, IFilters } from "core/interface";

import NewsList from "components/news-list";
import PaginationWrapper from "components/pagination-wrapper";

import NewsFilters from "components/news-filters";

import { TOTAL_PAGES, PAGE_SIZE } from "config";
import { getNews } from "api/apiNews";

interface NewsByFiltersState {
	filters: IFilters;
	isLoading: boolean;
	news: INews[];
}

class NewsByFilters extends React.Component<unknown, NewsByFiltersState> {
	state: NewsByFiltersState = {
		filters: {
			pageNumber: 1,
			pageSize: PAGE_SIZE,
			category: "all",
			keywords: "",
		},
		isLoading: true,
		news: [],
	};

	componentDidMount() {
		this.fetchNews();
	}

	componentDidUpdate(_: unknown, prevState: NewsByFiltersState) {
		if (
			prevState.filters.pageNumber !== this.state.filters.pageNumber ||
			prevState.filters.category !== this.state.filters.category ||
			prevState.filters.keywords !== this.state.filters.keywords
		) {
			this.fetchNews();
		}
	}

	fetchNews = async () => {
		try {
			const { filters } = this.state;
			this.setState({ isLoading: true });
			const data = await getNews(filters);
			this.setState({ news: data.news, isLoading: false });
		} catch (error) {
			console.error(error);
		}
	};

	changeFilter = (key: string, value: unknown) => {
		this.setState((prevState) => ({
			filters: {
				...prevState.filters,
				[key]: value,
			},
		}));
	};

	render() {
		const { news, isLoading, filters } = this.state;
		return (
			<section className={styles.section}>
				<NewsFilters
					keywords={filters.keywords}
					category={filters.category}
					changeFilter={this.changeFilter}
				/>

				<PaginationWrapper
					top
					bottom
					changeFilter={this.changeFilter}
					totalPages={TOTAL_PAGES}
					currentPage={filters.pageNumber}
				>
					<NewsList isLoading={isLoading} news={news} />
				</PaginationWrapper>
			</section>
		);
	}
}

export default NewsByFilters;
