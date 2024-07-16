import React from "react";
import styles from "./styles.module.scss";

import type { INews, IFilters } from "core/interfaces";

import NewsList from "components/news-list";
import PaginationWrapper from "components/pagination-wrapper";

import NewsFilters from "components/news-filters";
import { setFilters } from "store/slices/newsSlice";
import { useGetNewsQuery } from "store/services/newsApi";
import type { RootState, AppDispatch } from "store";
import { useAppSelector } from "../../store";

import { TOTAL_PAGES } from "config";
import { connect } from "react-redux";

interface NewsByFiltersProps {
	filters: IFilters;
	isLoading: boolean;
	news: INews[];

	setFilters: (payload: { key: string; value: string | number | null }) => void;
}

class NewsByFilters extends React.Component<NewsByFiltersProps> {
	changeFilter = (key: string, value: string | number | null) => {
		this.props.setFilters({ key, value });
	};

	render() {
		const { news, filters, isLoading } = this.props;
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

const mapStateToProps = (state: RootState) => ({
	filters: state.news.filters,
	news: state.news.news,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	setFilters: (payload: { key: string; value: string | number | null }) =>
		dispatch(setFilters(payload)),
});

const ConnectedNewsByFilters = connect(
	mapStateToProps,
	mapDispatchToProps,
)(NewsByFilters);

const NewsByFiltersContainer = () => {
	const filters = useAppSelector((state) => state.news.filters);

	const { isLoading } = useGetNewsQuery({ ...filters });

	return <ConnectedNewsByFilters isLoading={isLoading} />;
};

export default NewsByFiltersContainer;
