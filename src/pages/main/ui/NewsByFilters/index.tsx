import React from "react";
import { connect } from "react-redux";

import type { RootState } from "app/appStore";

import { NewsFilters } from "widgets/news";
import { newsApi } from "entities/news";
import { categoriesApi } from "entities/category";

import NewsListWithPagination from "../NewsListWithPagination";

import type { NewsByFiltersProps } from "../../model/props";
import type { NewsByFiltersState } from "../../model/state";

class NewsByFilters extends React.Component<
	NewsByFiltersProps,
	NewsByFiltersState
> {
	state: Readonly<NewsByFiltersState> = {
		categories: [],
		isLoading: true,
		isLoadingCategories: true,
	};

	componentDidMount() {
		this.props
			.dispatch(categoriesApi.endpoints.getCategories.initiate(null))
			.then(({ data, isLoading }) => {
				this.setState({
					categories: data ? data.categories : [],
					isLoadingCategories: isLoading,
				});
			});
		this.getNews();
	}

	componentDidUpdate(prevProps: NewsByFiltersProps) {
		if (prevProps.filters !== this.props.filters) {
			this.getNews();
		}
	}

	async getNews() {
		this.setState({
			isLoading: true,
		});

		return await this.props
			.dispatch(
				newsApi.endpoints.getNews.initiate(this.props.filters, {
					forceRefetch: true,
				}),
			)
			.then((data) => {
				this.setState({
					isLoading: data.isLoading,
				});
			});
	}

	render() {
		const { news, filters } = this.props;
		const { categories, isLoadingCategories, isLoading } = this.state;

		return (
			<section className="w-full flex flex-col gap-8 truncate">
				<NewsFilters
					filters={filters}
					categories={categories}
					isLoadingCategories={isLoadingCategories}
				/>

				<NewsListWithPagination
					isLoading={isLoading}
					news={news}
					filters={filters}
				/>
			</section>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	filters: state.news.filters,
	news: state.news.news,
});

export default connect(mapStateToProps)(NewsByFilters);
