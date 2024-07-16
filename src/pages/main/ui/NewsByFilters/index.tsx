import React from "react";

import type { IFilters } from "shared/interfaces";
import { NewsList } from "widgets/news";
import { Pagination } from "features/pagination";

import { setFilters } from "entities/news";
import { useGetNewsQuery } from "entities/news";
import type { RootState, AppDispatch } from "app/appStore";
import { useAppSelector } from "app/appStore";
import type { INews } from "entities/news";

import { TOTAL_PAGES } from "shared/config";
import { connect } from "react-redux";

import styles from "./styles.module.scss";
import NewsFilters from "../NewsFilters";

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
				<NewsFilters />

				<Pagination
					top
					bottom
					changeFilter={this.changeFilter}
					totalPages={TOTAL_PAGES}
					currentPage={filters.pageNumber}
				>
					<NewsList isLoading={isLoading} news={news} />
				</Pagination>
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
